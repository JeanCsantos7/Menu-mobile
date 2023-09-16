function ativar()
{

 const menu = document.querySelector('.nav-bar')
 
 if(menu.classList.contains('open'))
 {

   menu.classList.remove('open')

 }

 else
 {
  menu.classList.add('open')

 }

}




