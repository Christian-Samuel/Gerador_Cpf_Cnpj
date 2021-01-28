var CNPJ_GERADO=[];
    
/*EVENTOS*/
btn_gerar.onclick = ()=>
{
    CNPJ_GERADO=[];
    salvarNumeros(8);
    calcDigito1();
    calcDigito2();
    lbl_gerado.innerText = gerarPontuacao();
}

btn_verificar.onclick = ()=>
{
    CNPJ_GERADO=[];
    temp = txt_digitado.value;

    for(x=0;x<temp.length; x++)
    {
        CNPJ_GERADO[x] = temp[x];
    }

    if(txt_digitado.value[txt_digitado.value.length-2]==calcDigito1(CNPJ_GERADO) && txt_digitado.value[txt_digitado.value.length-1]==calcDigito2(CNPJ_GERADO))
        alert("CNPJ Valido!");
    else
        alert("CNPJ Invalido!");
}

txt_digitado.oninput =()=>
{
    if(!(txt_digitado.value[txt_digitado.value.length-1]>=0 && txt_digitado.value[txt_digitado.value.length-1]<=9))
        txt_digitado.value = txt_digitado.value.substring(0,txt_digitado.value.length-1);

    if(txt_digitado.value.length>10)
        txt_digitado.value = txt_digitado.value.substring(0,txt_digitado.value.length-1);
}

function gerarPontuacao(s_n)
{
    CNPJ="";
    
    for(x=0; x<CNPJ_GERADO.length; x++)
    {
        if(x==2 || x==5)
            CNPJ+=".";
            
        if(x==8)
            CNPJ+="/0001-";

        CNPJ+=CNPJ_GERADO[x];
    }
    
    return CNPJ;
}

function salvarNumeros(digitos)
{
    for(x=0; x<digitos; x++)
    {
        CNPJ_GERADO.push(numAleatorio());
    }
}

function numAleatorio()
{
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min)) + min;
}

function calcDigito1()
{
    soma=0;
    y=0;

    for(x=5; x!=6; x--)
    {   
        soma += (x*CNPJ_GERADO[y]);
        y++;

        if(x==2)
           x=10;

    }
    soma += (6*CNPJ_GERADO[y])+2;
    
    digito = soma%11;

    if(digito<=1)
    {
        CNPJ_GERADO.push(0);
        return 0;
    }
    else
    {
        CNPJ_GERADO.push(11-digito);
        return 11-digito;
    }
}

function calcDigito2()
{
    soma=0;
    y=0;

    for(x=6; x!=7; x--)
    {   
        soma += (x*CNPJ_GERADO[y]);
        y++;

        if(x==2)
           x=10;
    }

    soma += (7*CNPJ_GERADO[y])+(2*CNPJ_GERADO[CNPJ_GERADO.length-1])+3;
    digito = soma%11;
    
    if(digito<=1)
    {
        CNPJ_GERADO.push(0);
        return 0;
    }
    else
    {
        CNPJ_GERADO.push(11-digito);
        return 11-digito;
    }
}