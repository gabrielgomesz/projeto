function togglemode() {
  /* /////////////////////////////////////////////
  ESSA E A FORMA DE USAR O (TRUE OR FALSE)

  if(html.classlist.contain('light')){ html.classlist.remove('light')
  }else{
    html.classlist.add("light")
  } ///////////////////////////////////////
  ESSA E A FORMA MAIS COMPACTA DE (TRUE OR FALSE)

  const html = document.documentElement
  html.classlist.toggle("light")
/////////////////////////////////////////
  ESSA E A FORMA DE ADD IMG OU OUTROS ATRIBUTOS..

  const img = document.querySelector("#profile img")
          
  if (html.classlist.contains("light")){
    img.setAtribute("scr", "./assets/avatar-light.png")
  }
  else {
    img.setAtribute("scr", "./assets/avatar.png")
  }
} */ //////////////////////////////////
  const html = document.documentElement
  html.classList.toggle("light")

    /*FORMA  DE ADD UM ATRIBUTO OU IMG PARA O JAVA.SCRIPT*/
  const img = document.querySelector("#profile img")
  /* TRUE OR FALSE. SE TIVER "LIGHT",VAI ADD ESSA IMAGEM*/
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
  /*TRUE OR FALSE. SE NAO TIVER "LIGHT",VAI ADD A IMAGEM PADRÃO*/
    img.setAttribute("src", "./assets/avatar.png")
  }
}
