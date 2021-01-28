var CPF_GERADO=[];
    
/*EVENTOS*/
btn_gerar.onclick = ()=>
{
    CPF_GERADO=[];
    salvarNumeros(9);
    calcDigito1();
    calcDigito2();
    lbl_gerado.innerText = gerarPontuacao();
}
btn_verificar.onclick = ()=>
{
    CPF_GERADO=[];
    temp = txt_digitado.value;

    for(x=0;x<temp.length; x++)
    {
        CPF_GERADO[x] = temp[x];
    }
    
    if(txt_digitado.value[txt_digitado.value.length-2]==calcDigito1(CPF_GERADO).toString() && txt_digitado.value[txt_digitado.value.length-1]==calcDigito2(CPF_GERADO).toString())
        alert("CPF Valido!");
    else
        alert("CPF Invalido!");
}

txt_digitado.oninput =()=>
{
    if(!(txt_digitado.value[txt_digitado.value.length-1]>=0 && txt_digitado.value[txt_digitado.value.length-1]<=9))
        txt_digitado.value = txt_digitado.value.substring(0,txt_digitado.value.length-1);

    if(txt_digitado.value.length>11)
        txt_digitado.value = txt_digitado.value.substring(0,txt_digitado.value.length-1);
}

function gerarPontuacao(s_n)
{
    CPF="";
    for(x=0; x<CPF_GERADO.length; x++)
    {
        if(x==3 || x==6)
            CPF+=".";
            
        if(x==9)
            CPF+="-";

        CPF+=CPF_GERADO[x];
    }
    return CPF;
}

function salvarNumeros(digitos)
{
    for(x=0; x<digitos; x++)
    {
        CPF_GERADO.push(numAleatorio());
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

    for(x=10; x>=2; x--)
    {
        soma += (x*CPF_GERADO[y]);
        y++;
    }

    digito = soma%11;

    if(digito<=1)
    {
        CPF_GERADO.push(0);
        return digito;
    }
    else
    {
        CPF_GERADO.push(11-digito);
        return 11-digito;
    }
}

function calcDigito2()
{
    soma=0;
    y=0;

    for(x=11; x>=2; x--)
    {
        soma += (x*CPF_GERADO[y]);
        y++;
    }

    digito = soma%11;

    if(digito<=1)
    {
        CPF_GERADO.push(0);
        return digito;
    }
    else
    {
        CPF_GERADO.push(11-digito);
        return 11-digito;
    }
}