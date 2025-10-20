# Backend Health Check Script
# Run this script to quickly check if your backend is running correctly

Write-Host "`n" -NoNewline
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  BACKEND HEALTH CHECK" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Test 1: Check if port 5000 is listening
Write-Host "1. Checking if port 5000 is in use..." -ForegroundColor Yellow
try {
    $port = Get-NetTCPConnection -LocalPort 5000 -ErrorAction Stop
    Write-Host "   [OK] Port 5000 is ACTIVE" -ForegroundColor Green
    Write-Host "   Process ID: $($port.OwningProcess)" -ForegroundColor Gray
} catch {
    Write-Host "   [FAIL] Port 5000 is NOT in use" -ForegroundColor Red
    Write-Host "   Action: Start the backend server first" -ForegroundColor Yellow
    exit
}

Write-Host ""

# Test 2: Health endpoint check
Write-Host "2. Testing health endpoint..." -ForegroundColor Yellow
try {
    $health = Invoke-RestMethod -Uri "http://localhost:5000/api/health" -ErrorAction Stop
    Write-Host "   [OK] Health endpoint is responding" -ForegroundColor Green
    Write-Host "   Response: $($health.status)" -ForegroundColor Gray
} catch {
    Write-Host "   [FAIL] Health endpoint failed" -ForegroundColor Red
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Yellow
}

Write-Host ""

# Test 3: Contact form endpoint validation
Write-Host "3. Testing contact form endpoint..." -ForegroundColor Yellow
try {
    $body = @{
        name = ""
        email = ""
        message = ""
    } | ConvertTo-Json

    $response = Invoke-RestMethod -Uri "https://portfolio-backend-9hvq.onrender.com/api/contact" -Method POST -Body $body -ContentType "application/json" -ErrorAction Stop
    Write-Host "   [WARN] Endpoint responded (unexpected success)" -ForegroundColor Yellow
} catch {
    if ($_.Exception.Response.StatusCode -eq 400) {
        Write-Host "   [OK] Contact endpoint validation working" -ForegroundColor Green
        Write-Host "   (Correctly rejected empty form)" -ForegroundColor Gray
    } else {
        Write-Host "   [FAIL] Contact endpoint error" -ForegroundColor Red
        Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Yellow
    }
}

Write-Host ""

# Test 4: Environment variables check
Write-Host "4. Checking environment configuration..." -ForegroundColor Yellow
if (Test-Path ".env") {
    Write-Host "   [OK] .env file exists" -ForegroundColor Green
    
    $envContent = Get-Content ".env"
    $hasEmailUser = $envContent -match "EMAIL_USER="
    $hasEmailPass = $envContent -match "EMAIL_PASS="
    $hasPort = $envContent -match "PORT="
    
    if ($hasEmailUser) {
        Write-Host "   [OK] EMAIL_USER is configured" -ForegroundColor Green
    } else {
        Write-Host "   [WARN] EMAIL_USER not found in .env" -ForegroundColor Yellow
    }
    
    if ($hasEmailPass) {
        Write-Host "   [OK] EMAIL_PASS is configured" -ForegroundColor Green
    } else {
        Write-Host "   [WARN] EMAIL_PASS not found in .env" -ForegroundColor Yellow
    }
    
    if ($hasPort) {
        Write-Host "   [OK] PORT is configured" -ForegroundColor Green
    } else {
        Write-Host "   [INFO] PORT not specified (using default 5000)" -ForegroundColor Cyan
    }
} else {
    Write-Host "   [FAIL] .env file not found" -ForegroundColor Red
    Write-Host "   Action: Create .env file with email credentials" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  SUMMARY" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

try {
    $finalCheck = Invoke-RestMethod -Uri "http://localhost:5000/api/health" -ErrorAction Stop
    Write-Host "[SUCCESS] Backend is RUNNING and HEALTHY" -ForegroundColor Green
    Write-Host ""
    Write-Host "You can now:" -ForegroundColor Cyan
    Write-Host "  - Test the contact form from your frontend" -ForegroundColor White
    Write-Host "  - Access: http://localhost:5000/api/health" -ForegroundColor White
    Write-Host "  - Send test emails via contact form" -ForegroundColor White
} catch {
    Write-Host "[FAILED] Backend has ISSUES" -ForegroundColor Red
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Check backend terminal for errors" -ForegroundColor White
    Write-Host "  2. Verify .env configuration" -ForegroundColor White
    Write-Host "  3. Restart the backend server" -ForegroundColor White
    Write-Host "  4. Check BACKEND_TESTING.md for help" -ForegroundColor White
}

Write-Host ""
