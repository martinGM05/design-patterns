class Form {

    constructor(controls, action){
        this.controls = controls;
        this.action = action;
    }

    getContent(){
        return `<form method="post" action="${this.action}">
            ${this.controls.reduce((ac, e) => {
                return ac + `<div>
                    ${this.getLabel(e)}
                    ${this.getInput(e)}
                </div>`
            }, "")}
            <button type="submit">Enviar</button>
        </form>`
    }

    getLabel(control){
        return `<label>${control.text}</label>`;
    }

    getInput(control){
        return `<input type="${control.type}"
            id="${control.name}"
            name="${control.name}"
        />`
    }

}

class FormBuilder {
    constructor(){
        this.reset();
    }

    reset(){
        this.action = "";
        this.controls = []
    }

    setAction(action){
        this.action = action;
        return this;
    }

    setText(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "text"
        })
        return this;
    }

    setEmail(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "email"
        })
        return this;
    }

    setCheckBox(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "checkbox"
        })
        return this;
    }

    setColor(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "color"
        })
        return this;
    }

    build(){
        const frm = new Form(this.controls, this.action);
        this.reset();
        return frm;
    }

}

class FormDirector {

    constructor(formBuilder){
        this.setBuilder(formBuilder);
    }

    setBuilder(formBuilder){
        this.formBuilder = formBuilder;
    }

    createPeopleForm(){
        this.formBuilder.reset();
        this.formBuilder.setText("firstName", "Nombre")
                .setText("lastName", "Apellidos");
    }

    createContactForm(){
        this.formBuilder.reset();
        this.formBuilder.setText("name", "Nombre del interesado")
                .setEmail("email", "Correo Elctronico")
                .setText("message", "Mensaje");
    }

}

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder.setAction("add.php")
                             .setText("firstName", "Nombre")
                             .setText("lastName", "Apellidos")
                             .setCheckBox("drinker", "Es bebedor")
                             .setColor("favoriteColor", "Color Favorito")
                             .build()
console.log(formPeople)
form1.innerHTML = formPeople.getContent()

const formMail = frmBuilder.setAction("send.php")
                           .setText("name", "Nombre")
                           .setEmail("email", "Correo Electronico")
                           .build();
form2.innerHTML = formMail.getContent();

const director = new FormDirector(frmBuilder);
director.createPeopleForm();
form3.innerHTML = frmBuilder.build().getContent();
director.createPeopleForm();
form4.innerHTML = frmBuilder.build().getContent();
director.createContactForm();
form5.innerHTML = frmBuilder.build().getContent();