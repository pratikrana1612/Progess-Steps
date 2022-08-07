const nextBtn= document.getElementById('next');
const prevBtn= document.getElementById('prev');

const btnChanger = (btn,type) =>
{
    if(type === 'disable')
    {
        btn.style.cursor = 'not-allowed';
        btn.setAttribute('disabled','');
        btn.classList.remove('likeEnable');
        btn.classList.add('likeDisable');
    }
    else if(type === 'enable')
    {
        btn.style.cursor = 'pointer';
        btn.removeAttribute('disabled');
    }
}

const btnColorChanger = (btn) =>
{
    btn.classList.remove('likeDisable');
    btn.classList.add('likeEnable');
}
const prevFunction = () => 
{
    btnColorChanger(nextBtn);
    if(nextBtn.hasAttribute('disabled'))
    {
        btnChanger(nextBtn,'enable');
    }


    const active = document.querySelector('.active');
    active.style['transition-delay'] = '-1s';
    active.style['border-color'] = '#e0e0e0';
    const aElement = active.previousElementSibling;
    aElement.style.backgroundColor = '#e0e0e0';
    const liElement=aElement.previousElementSibling;
    active.classList.remove('active');
    // liElement.style.borderColor = '#e0e0e0';
    liElement.classList.add('active');


    if(active === document.querySelector('ul li:nth-of-type(2)'))
    {
        btnChanger(prevBtn,'disable');
    }
}

const nextFunction = (className) =>
{
    btnColorChanger(prevBtn);
    if(prevBtn.hasAttribute('disabled'))
    {
        btnChanger(prevBtn,'enable');;
    }

    const active = document.querySelector('.active');
    const aElement = active.nextElementSibling;
    aElement.style.backgroundColor = '#1e9bff';
    const liElement=aElement.nextElementSibling
    liElement.style['transition-delay'] = '0s';
    liElement.style.borderColor = '#1e9bff';
    active.classList.remove('active');
    liElement.classList.add('active');


    if(active === document.querySelector('ul li:nth-of-type(3)'))
    {
        btnChanger(nextBtn,'disable');
    }
}


nextBtn.addEventListener('click',nextFunction);
prevBtn.addEventListener('click',prevFunction);