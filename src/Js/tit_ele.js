var TE_GERADO=[];

/*EVENTOS*/
btn_gerar.onclick = ()=>
{
    TE_GERADO=[];
    salvarNumeros(8);
    if(UFSelect.value == "Indeferente")
    {
        TE_GERADO.push(numAleatorio(1,3));
        TE_GERADO.push(numAleatorio(1,8));
    }
    else
    {
      TE_GERADO.push(UFSelect.value[0]);
      TE_GERADO.push(UFSelect.value[1]);
    }

    calcDigito1();
    calcDigito2();
    
    lbl_gerado.innerText = gerarPontuacao();
}
btn_verificar.onclick = ()=>
{
    TE_GERADO=[];
    temp = txt_digitado.value;

    for(x=0;x<temp.length; x++)
    {
        TE_GERADO[x] = temp[x];
    }
    

    if(txt_digitado.value[txt_digitado.value.length-2]==calcDigito1(TE_GERADO) && txt_digitado.value[txt_digitado.value.length-1]==calcDigito2(TE_GERADO))
        alert("Titulo Eleitor Valido!");
    else
        alert("Titulo Eleitor Invalido!");
    

}

txt_digitado.oninput =()=>
{
    if(!(txt_digitado.value[txt_digitado.value.length-1]>=0 && txt_digitado.value[txt_digitado.value.length-1]<=9))
        txt_digitado.value = txt_digitado.value.substring(0,txt_digitado.value.length-1);

    if(txt_digitado.value.length>12)
        txt_digitado.value = txt_digitado.value.substring(0,txt_digitado.value.length-1);
}

function gerarPontuacao(s_n)
{
    CPF="";
   
    for(x=0; x<TE_GERADO.length; x++)
    {
        if(x==4 || x==8)
            CPF+=" ";

        CPF+=TE_GERADO[x];
    }
    
    return CPF;
}

function salvarNumeros(digitos)
{
    for(x=0; x<digitos; x++)
    {
        TE_GERADO.push(numAleatorio(0,10));
    }
}

function numAleatorio(mi,ma)
{
  min = Math.ceil(mi);
  max = Math.floor(ma);
  return Math.floor(Math.random() * (max - min)) + min;
}

function calcDigito1()
{
    soma=0;
    y=0;

    for(x=2; x<=9; x++)
    {
        soma += (x*TE_GERADO[y]);
        y++;
    }

    digito = soma%11;

    if(digito==10)
    {
        TE_GERADO.push(0);
        return 0;
    }
    else
    {
        TE_GERADO.push(digito);
        return digito;
    }
}

function calcDigito2()
{
    soma=0;
    y=8;

    for(x=7; x<=9; x++)
    {
        soma += (x*TE_GERADO[y]);
        y++;
    }

    digito = soma%11;

    if(digito==10)
    {
        TE_GERADO.push(0);
        return 0;
    }
    else
    {
        TE_GERADO.push(digito);
        return digito;
    }
}