// إظهار وإخفاءالصورـ id
function toggleVisibility(id) {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = (el.style.display === 'none') ? 'block' : 'none';
    }
}

//  تغيير مصدر صورة عند الضغط
function changeImage(imgId, newSrc) {
    const img = document.getElementById(imgId);
    if (img) {
        img.src = newSrc;
    }
}

//  عداد تنازلي 
let countdownValue = 10;
function startCountdown() {
    const display = document.getElementById("countdown");
    const interval = setInterval(() => {
        if (countdownValue <= 0) {
            clearInterval(interval);
            display.innerText = "Time's up!";
        } else {
            display.innerText = countdownValue + " seconds left";
            countdownValue--;
        }
    }, 1000);
}

//  تغيير النص في عنصر معيّن
function changeTextContent(id, newText) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = newText;
    }
    
}

//  التحقق من كلمة المرور عند تسجيل الدخول
function validateLogin(event) {
    const passwordInput = document.getElementById("password");
    if (!passwordInput || passwordInput.value.length < 4) {
        alert("كلمة المرور يجب أن تكون 4 أحرف على الأقل");
        event.preventDefault(); // يمنع الإرسال
    }
}
