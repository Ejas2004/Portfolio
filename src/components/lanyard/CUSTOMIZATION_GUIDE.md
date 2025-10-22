# 🎨 Lanyard Component Customization Guide

This guide will help you manually adjust the lanyard string length, attachment points, card size, and positioning.

---

## 📐 **1. STRING LENGTH ADJUSTMENT**

**File:** `Lanyard.jsx`  
**Lines:** ~84-90

### Rope Joint Distances
```javascript
useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.5]);  // ← Change last number
useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.5]);     // ← Change last number
useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.5]);     // ← Change last number
```

**What it does:** Controls the maximum length of each rope segment

**Values to try:**
- `1.0` = Short segments (tight string)
- `1.5` = Medium segments (current setting)
- `2.0` = Long segments (loose string)
- `2.5` = Very long segments (very loose)

**Tip:** All three should usually be the same value for uniform string appearance.

---

## 🔗 **2. ATTACHMENT POINT (Where String Meets Card)**

**File:** `Lanyard.jsx`  
**Lines:** ~91-94

### Spherical Joint Position
```javascript
useSphericalJoint(j3, card, [
  [0, 0, 0],
  [0, 2.5, 0]  // ← Change middle number (Y-axis)
]);
```

**What it does:** Sets where the string attaches to the card

**Y-axis values to try:**
- `1.0` = Low attachment (middle of card)
- `1.5` = Default attachment
- `2.0` = Higher attachment
- `2.5` = Top of card (current setting)
- `3.0` = Very top (above card)

**Tip:** Higher values = string attaches near the top hole of the card tag

---

## 📏 **3. RIGID BODY SPACING (String Segment Distribution)**

**File:** `Lanyard.jsx`  
**Lines:** ~149-159

### Segment Positions
```javascript
<RigidBody ref={fixed} {...segmentProps} type="fixed" />
<RigidBody position={[0.75, 0, 0]} ref={j1} {...segmentProps}>  // ← X position
<RigidBody position={[1.5, 0, 0]} ref={j2} {...segmentProps}>   // ← X position
<RigidBody position={[2.25, 0, 0]} ref={j3} {...segmentProps}>  // ← X position
<RigidBody position={[3, 0, 0]} ref={card} {...segmentProps}>   // ← X position (card)
```

**What it does:** Distributes the string segments in space

**Current pattern:** `0.75` spacing between each (0 → 0.75 → 1.5 → 2.25 → 3.0)

**Alternative patterns to try:**
- **Tight:** `0, 0.5, 1.0, 1.5, 2.0` (0.5 spacing)
- **Medium:** `0, 0.75, 1.5, 2.25, 3.0` (0.75 spacing - current)
- **Loose:** `0, 1.0, 2.0, 3.0, 4.0` (1.0 spacing)

**Tip:** First number is always `0`, last number determines total string length

---

## 📦 **4. CARD SIZE**

**File:** `Lanyard.jsx`  
**Line:** ~163

### Card Scale
```javascript
<group
  scale={4.125}  // ← Change this number
  position={[0, -1.2, -0.05]}
```

**What it does:** Controls how big the card appears

**Values to try:**
- `2.0` = Small card
- `2.75` = Medium card
- `3.5` = Large card
- `4.125` = Very large card (current - 50% bigger than default)
- `5.0` = Extra large card

**Tip:** Bigger cards need bigger container heights (see section 7)

---

## 📍 **5. CARD VERTICAL POSITION**

**File:** `Lanyard.jsx`  
**Line:** ~148

### Group Position
```javascript
<group position={[0, 2, 0]}>  // ← Change middle number (Y-axis)
```

**What it does:** Moves the entire lanyard + card up or down

**Y-axis values to try:**
- `0` = Very low (card at bottom)
- `1` = Low position
- `2` = Medium position (current)
- `3` = High position
- `4` = Very high (more string visible at top)

**Tip:** Higher values = more string visible, card appears lower in view

---

## 📷 **6. CAMERA SETTINGS**

**File:** `Lanyard.jsx`  
**Line:** ~13

### Camera Position & FOV
```javascript
export default function Lanyard({ 
  position = [0, 0, 35],  // ← Z-axis: distance from camera
  gravity = [0, -40, 0], 
  fov = 30,               // ← Field of view
  transparent = true 
}) {
```

**Camera Distance (Z-axis):**
- `20` = Very close (card fills screen)
- `25` = Close view
- `30` = Medium view
- `35` = Far view (current - shows full card)
- `40` = Very far (card appears smaller)

**Field of View (FOV):**
- `15` = Narrow (telephoto lens effect)
- `20` = Default narrow
- `25` = Medium
- `30` = Wide (current)
- `40` = Very wide (fisheye effect)

**Tip:** Larger cards need higher Z-axis values and wider FOV

---

## 📐 **7. CONTAINER HEIGHT**

**File:** `About.jsx`  
**Line:** ~17

### Container Dimensions
```javascript
<div className="flex justify-center items-center animate-slide-in-left h-[600px] md:h-[700px]">
                                                                        ↑mobile    ↑desktop
```

**What it does:** Controls the visible area for the lanyard component

**Height values to try:**
- `h-[400px] md:h-[500px]` = Small container
- `h-[500px] md:h-[600px]` = Medium container
- `h-[600px] md:h-[700px]` = Large container (current)
- `h-[700px] md:h-[800px]` = Extra large container

**Tip:** Bigger cards need taller containers to show the full string

---

## 🎯 **8. CAMERA POSITION IN ABOUT.JSX**

**File:** `About.jsx`  
**Line:** ~18

### Camera Override
```javascript
<Lanyard position={[0, 0, 35]} gravity={[0, -40, 0]} />
                         ↑ Can override camera distance here
```

**Tip:** You can override default camera settings directly in About.jsx

---

## 🔧 **QUICK ADJUSTMENT SCENARIOS**

### **Scenario 1: String is too short**
1. Increase rope joint distances (1.5 → 2.0)
2. Increase rigid body spacing (0.75 → 1.0)
3. Raise attachment point Y value (2.5 → 3.0)

### **Scenario 2: String doesn't attach to top of card**
1. Increase spherical joint Y value (2.5 → 3.5)
2. Adjust group position Y value if needed

### **Scenario 3: Card is too small**
1. Increase card scale (4.125 → 5.0)
2. Increase camera Z distance (35 → 40)
3. Increase container height (600px → 700px)

### **Scenario 4: Card is too big**
1. Decrease card scale (4.125 → 3.0)
2. Decrease camera Z distance (35 → 30)
3. Decrease container height (600px → 500px)

### **Scenario 5: Can't see full lanyard**
1. Increase group position Y value (2 → 3 or 4)
2. Increase container height
3. Increase camera FOV (30 → 35)

### **Scenario 6: String looks weird/unnatural**
1. Make sure all rope joint distances are equal
2. Make rigid body spacing uniform (e.g., all 0.75 or all 1.0)
3. Check attachment point isn't too high or too low

---

## 📊 **CURRENT SETTINGS SUMMARY**

| Parameter | Current Value | File | Line |
|-----------|---------------|------|------|
| Rope Joint Distances | 1.5 | Lanyard.jsx | ~84-86 |
| Attachment Point Y | 2.5 | Lanyard.jsx | ~93 |
| Rigid Body Spacing | 0.75 | Lanyard.jsx | ~151-159 |
| Card Scale | 4.125 | Lanyard.jsx | ~163 |
| Group Position Y | 2 | Lanyard.jsx | ~148 |
| Camera Distance Z | 35 | Lanyard.jsx | ~13 |
| Camera FOV | 30 | Lanyard.jsx | ~15 |
| Container Height | 600px/700px | About.jsx | ~17 |

---

## 💡 **TESTING TIPS**

1. **Make one change at a time** - easier to see what each parameter does
2. **Save and refresh** - Vite hot reload should show changes immediately
3. **Start with string length** - get the basic length right first
4. **Then adjust attachment** - fine-tune where string meets card
5. **Finally camera/size** - adjust viewing angle and card size last

---

## 🎨 **PHYSICS PARAMETERS** (Advanced)

**File:** `Lanyard.jsx`  
**Lines:** ~71, ~13

### Physics Settings
```javascript
// Segment physics properties (line ~71)
const segmentProps = { 
  type: 'dynamic', 
  canSleep: true, 
  colliders: false, 
  angularDamping: 4,    // ← Rotation resistance (higher = less spin)
  linearDamping: 4      // ← Movement resistance (higher = less swing)
};

// Gravity (line ~13)
gravity = [0, -40, 0]   // ← Y value controls gravity strength
```

**Gravity values:**
- `-20` = Light gravity (floaty)
- `-40` = Normal gravity (current)
- `-60` = Heavy gravity (card hangs straight down)

**Damping values:**
- `2` = Very bouncy/active
- `4` = Normal (current)
- `6` = Very stable/stiff

---

## 📝 **EXAMPLE: Making String Longer**

**Step-by-step:**

1. Open `Lanyard.jsx`
2. Find rope joints (~line 84):
   ```javascript
   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 2.0]); // Changed to 2.0
   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 2.0]);    // Changed to 2.0
   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 2.0]);    // Changed to 2.0
   ```

3. Find rigid body positions (~line 151):
   ```javascript
   <RigidBody position={[1.0, 0, 0]} ref={j1} {...segmentProps}>  // Changed to 1.0
   <RigidBody position={[2.0, 0, 0]} ref={j2} {...segmentProps}>  // Changed to 2.0
   <RigidBody position={[3.0, 0, 0]} ref={j3} {...segmentProps}>  // Changed to 3.0
   <RigidBody position={[4.0, 0, 0]} ref={card} {...segmentProps}> // Changed to 4.0
   ```

4. Save and check the result!

---

## ✅ **QUICK REFERENCE CHEAT SHEET**

```
STRING LENGTH       → Rope joint distances (1.0 - 2.5)
ATTACHMENT HEIGHT   → Spherical joint Y (1.0 - 3.5)
STRING DISTRIBUTION → Rigid body X positions (spacing: 0.5 - 1.5)
CARD SIZE           → Group scale (2.0 - 5.0)
VERTICAL POSITION   → Group position Y (0 - 4)
VIEW DISTANCE       → Camera Z (20 - 40)
VIEW ANGLE          → Camera FOV (15 - 40)
CONTAINER SIZE      → Tailwind height classes
GRAVITY STRENGTH    → Gravity Y (-20 to -60)
PHYSICS RESISTANCE  → Damping values (2 - 6)
```

---

Good luck customizing! 🚀
