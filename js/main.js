// == Navigation ==
var toggle = document.getElementById('navToggle');
var links  = document.getElementById('navLinks');
toggle.addEventListener('click', function(){ links.classList.toggle('active'); });
document.querySelectorAll('.nav-links a').forEach(function(a){
    a.addEventListener('click', function(){ links.classList.remove('active'); });
});

document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
        e.preventDefault();
        var el = document.querySelector(a.getAttribute('href'));
        if(el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
    });
});

setTimeout(function(){
    var hero = document.querySelector('.hero-content');
    if(hero) hero.classList.add('active');
}, 200);

// == Role cycling ==
var roleEl = document.getElementById('roleText');
if(roleEl){
    var roles = ['自动化控制工程师', 'PLC 编程工程师', '电气自动化技术员'];
    var ri = 0;
    setInterval(function(){
        ri = (ri + 1) % roles.length;
        roleEl.style.opacity = '0';
        setTimeout(function(){
            roleEl.textContent = roles[ri];
            roleEl.style.opacity = '1';
        }, 300);
    }, 3000);
}

// == Scroll reveal ==
var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
        if(e.isIntersecting){
            e.target.classList.add('active');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(function(el){ observer.observe(el); });

// == 3D Tilt ==
document.querySelectorAll('.edu-card, .proj-card, .about-photo').forEach(function(card){
    card.addEventListener('mousemove', function(e){
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width  - 0.5;
        var y = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg) translateZ(8px)';
    });
    card.addEventListener('mouseleave', function(){
        card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    });
});
