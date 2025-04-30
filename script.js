
document.getElementById("process").style.display = "none";
document.getElementById("ended").style.display = "none";
document.getElementById("again").style.display = "none";
let login = document.getElementById("start");
let inBalance = document.querySelector("#inBalance");
let outBalance = document.querySelector("#outBalance");
let balIncrease = document.querySelector("#in");
let balDecrease = document.querySelector("#out");
let starting = document.querySelector("#again");
let reload = document.querySelector("#reload");

const registerUsers =[
    {
        username:"Mali",
        password:"Mali123",
        balance:200
    },
    {
        username:"Gera",
        password:"Gera123",
        balance:290
    },
    {
        username:"Maui",
        password:"Maui123",
        balance:67
    }
]

const verifyLogin  = (username, password) =>{
    for(let i = 0; i < registerUsers.length; i++){
        if(username === registerUsers[i].username && password == registerUsers[i].password){
            return i;
        };
    };
    return registerUsers.length + 1;
};

const verifyButton = (start) =>{
    if (start.popover != ""){
        console.log("boton activo");
        
    }
}

const formHandler = (event) => {
    event.preventDefault();
    let userName = document.querySelector("#username");
    let password = document.querySelector("#password");
    let messageDiv = document.querySelector("#login-message");
    let accountDiv = document.querySelector("#account");
    document.getElementById("box").style.display = "none";
    document.getElementById("process").style.display = "";
    document.getElementById("login-message").style.display = "initial";
    document.getElementById("account").style.display = "initial";
    document.getElementById("manage").style.display = "initial";
    document.getElementById("inBalance").style.display = "initial";
    document.getElementById("outBalance").style.display = "initial";
    document.getElementById("ended").style.display = "initial";
    document.getElementById("in").style.display = "none";
    document.getElementById("out").style.display = "none";
    let numberUser = parseInt(verifyLogin(username.value,password.value));
    if(numberUser <= registerUsers.length){
        messageDiv.innerHTML = `<h1>Hola ${registerUsers[numberUser].username}</h1>`;
    }else{
        messageDiv.innerHTML = `<h3>El usuario o contraseña son incorrectos</h3>`;
        document.getElementById("manage").style.display = "none";
    }
    if(numberUser <= registerUsers.length){
        accountDiv.innerHTML = `<h2>${username.value} su cuenta tiene untotal de:</h2>
        <h4>${registerUsers[numberUser].balance} Pesos</h4>
        <h5>¿Que desea hacer el dia de hoy?</h5>`;
    }
}

const increase = (inb) =>{
    inb.preventDefault();
    document.getElementById("in").style.display = "initial";
    document.getElementById("outBalance").style.display = "none";
    document.getElementById("inBalance").style.display = "none";
}

const decrease = (outb) =>{
    outb.preventDefault();
    document.getElementById("out").style.display = "initial";
    document.getElementById("inBalance").style.display = "none";
    document.getElementById("outBalance").style.display = "none";
}

const up= (inm) =>{
    let numberUser = parseInt(verifyLogin(username.value,password.value));
    let balance = parseInt(registerUsers[numberUser].balance);
    let result = parseInt(inm.value) + parseInt(balance);
    if(inm.value >= 0 && result <= 990){
        registerUsers[numberUser].balance = result;
        document.getElementById("in").style.display = "none";
        document.getElementById("account").style.display = "none";
        return `<h2>Su transaccion ha sido aceptada</h2> <h3>Tu nuevo saldo es de ${registerUsers[numberUser].balance}</h3>`;
    }else{
        return `<h3>el saldo a abonar es erroneo por favor verifica la cantidad</h3>
        <h4>por favor sigue los siguientes pasos e intentalo denuevo</h4>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">verifica que la cantidad no este en numeros negativos</li>
        <li class="list-group-item">Las cantidades en esta cuenta no puede almacenar mas de 990 pesos por favor no ingreses mas dinero</li>
        <li class="list-group-item">intenta de nuevo con otra cantidad</li>
        </ul>
        `;
    }
}

const bin = (bi) =>{
    bi.preventDefault();
    let messageDiv = document.querySelector("#result");
    messageDiv.innerHTML = up(inm);
    document.getElementById("lastBox").style.display = "initial";
    document.getElementById("again").style.display = "initial";
}

const down= (outm) =>{
    let numberUser = parseInt(verifyLogin(username.value,password.value));
    let balance = parseInt(registerUsers[numberUser].balance);
    let result = parseInt(balance) - parseInt(outm.value);
    if(outm.value >= 0 && result >= 10){
        registerUsers[numberUser].balance = result;
        document.getElementById("out").style.display = "none";
        document.getElementById("account").style.display = "none";
        return `<h2>Su transaccion ha sido aceptada</h2> <h3>Tu nuevo saldo es de ${registerUsers[numberUser].balance}</h3>`;
    }else{
        return `<h3>el saldo a retirar es erroneo por favor verifica la cantidad</h3>
        <h4>por favor sigue los siguientes pasos e intentalo denuevo</h4>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">verifica que la cantidad no este en numeros negativos</li>
        <li class="list-group-item">Las cantidades en esta cuenta no pueden ser menores de 10 pesos por favor no retires mas dinero</li>
        <li class="list-group-item">intenta de nuevo con otra cantidad</li>
        </ul>`;
    }
}

const bout = (bo) =>{
    bo.preventDefault();
    let messageDiv = document.querySelector("#result");
    messageDiv.innerHTML = down(outm);
    document.getElementById("lastBox").style.display = "initial";
    document.getElementById("again").style.display = "initial";
}

const restart = (_) =>{
    document.getElementById("inBalance").style.display = "initial";
    document.getElementById("outBalance").style.display = "initial";
    document.getElementById("in").style.display = "none";
    document.getElementById("out").style.display = "none";
    document.getElementById("lastBox").style.display = "none";
    document.getElementById("account").style.display = "initial";
    document.getElementById("inm").value = "";
    document.getElementById("outm").value = "";
    let accountDiv = document.querySelector("#account");
    let numberUser = parseInt(verifyLogin(username.value,password.value));
    accountDiv.innerHTML = `<h2>${username.value} su cuenta tiene untotal de:</h2>
    <h4>${registerUsers[numberUser].balance} Pesos</h4>
    <h5>¿Que desea hacer el dia de hoy?</h5>`;
}

const rel =(_) =>{
    document.getElementById("box").style.display = "initial";
    document.getElementById("login-message").style.display = "none";
    document.getElementById("account").style.display = "none";
    document.getElementById("process").style.display = "none";
    document.getElementById("lastBox").style.display = "none";
    document.getElementById("ended").style.display = "none";
    document.getElementById("login").reset();
}

login.addEventListener("click", (event) => formHandler(event));
inBalance.addEventListener("click",(inb) => increase(inb));
outBalance.addEventListener("click",(outb) => decrease(outb));
balIncrease.addEventListener("submit",(bi) => bin(bi));
balDecrease.addEventListener("submit",(bo) => bout(bo));
reload.addEventListener("click", (_) => rel(_));
starting.addEventListener("click",(_) => restart(_));