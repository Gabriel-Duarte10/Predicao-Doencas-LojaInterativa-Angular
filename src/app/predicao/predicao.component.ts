import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-predicao',
  templateUrl: './predicao.component.html',
  styleUrls: ['./predicao.component.scss']
})
export class PredicaoComponent implements OnInit {

  form = new FormGroup({
    mentaisArray: new FormArray([]),
    cabecasArray: new FormArray([]),
    frontaisArray: new FormArray([]),
    extremidadesArray: new FormArray([]),
    corpoTodosArray: new FormArray([]),
  });

  mentais = Array();
  cabecas = Array();
  frontais = Array();
  extremidades = Array();
  corpoTodos = Array();

  get mentaisArray(): FormArray{
    return this.form.controls["mentaisArray"] as FormArray;
  }
  get mentaisArraySelecionados(): Array<any> {
    return this.form.value.mentaisArray.map(u => u.id);
  }
  get cabecasArray(): FormArray{
    return this.form.controls["cabecasArray"] as FormArray;
  }
  get cabecasArraySelecionados(): Array<any> {
    return this.form.value.cabecasArray.map(u => u.id);
  }
  get frontaisArray(): FormArray{
    return this.form.controls["frontaisArray"] as FormArray;
  }
  get frontaisArraySelecionados(): Array<any> {
    return this.form.value.frontaisArray.map(u => u.id);
  }
  get extremidadesArray(): FormArray{
    return this.form.controls["extremidadesArray"] as FormArray;
  }
  get extremidadesArraySelecionados(): Array<any> {
    return this.form.value.extremidadesArray.map(u => u.id);
  }
  get corpoTodosArray(): FormArray{
    return this.form.controls["corpoTodosArray"] as FormArray;
  }
  get corpoTodosArraySelecionados(): Array<any> {
    return this.form.value.corpoTodosArray.map(u => u.id);
  }
  @ViewChild('myModal') myModal;
  private modalRef;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.addListas();
    this.addMentaisArray();
    this.addCabecasArray();
    this.addCorpoTodosArray();
    this.addFrontaisArray();
    this.addExtremidadesArray();
  }
  addListas()
  {
    this.mentais.push(
      {
        "id": "anxiety",
        "nome": "ansiedade"
      },
      {
        "id": "mood_swings",
        "nome": "mudan??as de humor"
      },
      {
        "id": "restlessness",
        "nome": "inquieta????o"
      },
      {
        "id": "nausea",
        "nome": "n??usea"
      },
      {
        "id": "unsteadiness",
        "nome": "instabilidade"
      },
      {
        "id": "depression",
        "nome": "depress??o"
      },
      {
        "id": "irritability",
        "nome": "irritabilidade"
      },
      {
        "id": "lack_of_concentration",
        "nome": "Falta de concentra????o"
      },
      {
        "id": "increased_appetite",
        "nome": "aumento do apetite"
      },
      {
        "id": "dizziness",
        "nome": "tontura"
      },
      {
        "id": "slurred_speech",
        "nome": "fala arrastada"
      },
      {
        "id": "loss_of_balance",
        "nome": "perda de equil??brio"
      }
    );
    this.cabecas.push(
      {
        "id": "continuous_sneezing",
        "nome": "espirros cont??nuos"
      },
      {
        "id": "phlegm",
        "nome": "catarro"
      },
      {
        "id": "sinus_pressure",
        "nome": "press??o sinusal"
      },
      {
        "id": "runny_nose",
        "nome": "coriza"
      },
      {
        "id": "congestion",
        "nome": "congestionamento"
      },
      {
        "id": "rusty_sputum",
        "nome": "escarro enferrujado"
      },
      {
        "id": "blood_in_sputum",
        "nome": "sangue no escarro"
      },
      {
        "id": "yellow_crust_ooze",
        "nome": "crosta amarela escorrendo"
      },
      {
        "id": "sunken_eyes",
        "nome": "olhos fundos"
      },
      {
        "id": "headache",
        "nome": "dor de cabe??a"
      },
      {
        "id": "loss_of_appetite",
        "nome": "perda de apetite"
      },
      {
        "id": "pain_behind_the_eyes",
        "nome": "dor atr??s dos olhos"
      },
      {
        "id": "yellowing_of_eyes",
        "nome": "olhos amarelados"
      },
      {
        "id": "blurred_and_distorted_vision",
        "nome": "vis??o turva e distorcida"
      },
      {
        "id": "throat_irritation",
        "nome": "irrita????o na garganta"
      },
      {
        "id": "redness_of_eyes",
        "nome": "vermelhid??o dos olhos"
      },
      {
        "id": "neck_pain",
        "nome": "dor de pesco??o"
      },
      {
        "id": "bruising",
        "nome": "contus??o"
      },
      {
        "id": "puffy_face_and_eyes",
        "nome": "rosto e olhos inchados"
      },
      {
        "id": "drying_and_tingling_lips",
        "nome": "l??bios secando e formigando"
      },
      {
        "id": "stiff_neck",
        "nome": "torcicolo"
      },
      {
        "id": "loss_of_smell",
        "nome": "perda de olfato"
      },
      {
        "id": "watering_from_eyes",
        "nome": "lacrimejando dos olhos"
      },
      {
        "id": "visual_disturbances",
        "nome": "dist??rbios visuais"
      },
      {
        "id": "pus_filled_pimples",
        "nome": "espinhas cheias de pus"
      },
      {
        "id": "blackheads",
        "nome": "cravos"
      },
      {
        "id": "ulcers_on_tongue",
        "nome": "??lceras na l??ngua"
      },
      {
        "id": "patches_in_throat",
        "nome": "manchas na garganta"
      },
      {
        "id": "cough",
        "nome": "tosse"
      },
      {
        "id": "red_sore_around_nose",
        "nome": "ferida vermelha ao redor do nariz"
      }
    );
    this.frontais.push(
      {
        "id": "stomach_pain",
        "nome": "dor de est??mago"
      },
      {
        "id": "back_pain",
        "nome": "dor nas costas"
      },
      {
        "id": "abdominal_pain",
        "nome": "dor abdominal"
      },
      {
        "id": "chest_pain",
        "nome": "dor no peito"
      },
      {
        "id": "pain_during_bowel_movements",
        "nome": "dor durante os movimentos intestinais"
      },
      {
        "id": "pain_in_anal_region",
        "nome": "dor na regi??o anal"
      },
      {
        "id": "belly_pain",
        "nome": "dor de barriga"
      },
      {
        "id": "vomiting",
        "nome": "v??mito"
      },
      {
        "id": "indigestion",
        "nome": "indigest??o"
      },
      {
        "id": "constipation",
        "nome": "Pris??o de ventre"
      },
      {
        "id": "swelling_of_stomach",
        "nome": "incha??o do est??mago"
      },
      {
        "id": "cramps",
        "nome": "c??licas"
      },
      {
        "id": "excessive_hunger",
        "nome": "fome excessiva"
      },
      {
        "id": "bladder_discomfort",
        "nome": "desconforto na bexiga"
      },
      {
        "id": "stomach_bleeding",
        "nome": "sangramento no est??mago"
      },
      {
        "id": "distention_of_abdomen",
        "nome": "distens??o abdominal"
      },
      {
        "id": "diarrhoea",
        "nome": "diarr??ia"
      },
      {
        "id": "dark_urine",
        "nome": "urina escura"
      },
      {
        "id": "yellow_urine",
        "nome": "urina amarela"
      },
      {
        "id": "bloody_stool",
        "nome": "fezes sangrentas"
      },
      {
        "id": "irritation_in_anus",
        "nome": "irrita????o no ??nus"
      },
      {
        "id": "foul_smell_of urine",
        "nome": "mau cheiro de urina"
      },
      {
        "id": "continuous_feel_of_urine",
        "nome": "sensa????o cont??nua de urina"
      },
      {
        "id": "passage_of_gases",
        "nome": "passagem de gases"
      },
      {
        "id": "abnormal_menstruation",
        "nome": "menstrua????o anormal"
      },
      {
        "id": "acidity",
        "nome": "acidez"
      },
      {
        "id": "breathlessness",
        "nome": "falta de ar"
      },
      {
        "id": "acute_liver_failure",
        "nome": "insufici??ncia hep??tica aguda"
      },
      {
        "id": "fluid_overload",
        "nome": "sobrecarga de fluido"
      },
      {
        "id": "swelled_lymph_nodes",
        "nome": "g??nglios linf??ticos inchados"
      },
      {
        "id": "enlarged_thyroid",
        "nome": "tire??ide aumentada"
      },
      {
        "id": "spinning_movements",
        "nome": "movimentos girat??rios"
      },
      {
        "id": "history_of_alcohol_consumption",
        "nome": "hist??rico de consumo de ??lcool"
      },
      {
        "id": "fluid_overload",
        "nome": "sobrecarga de fluido"
      },
      {
        "id": "palpitations",
        "nome": "palpita????es"
      },
      {
        "id": "fast_heart_rate",
        "nome": "frequ??ncia card??aca r??pida"
      }
    );
    this.extremidades.push(
      {
        "id": "joint_pain",
        "nome": "dor nas articula????es"
      },
      {
        "id": "knee_pain",
        "nome": "dor no joelho"
      },
      {
        "id": "hip_joint_pain",
        "nome": "dor na articula????o do quadril"
      },
      {
        "id": "muscle_pain",
        "nome": "dor muscular"
      },
      {
        "id": "painful_walking",
        "nome": "caminhada dolorosa"
      },
      {
        "id": "weakness_in_limbs",
        "nome": "fraqueza nos membros"
      },
      {
        "id": "muscle_weakness",
        "nome": "fraqueza muscular"
      },
      {
        "id": "weakness_of_one_body_side",
        "nome": "fraqueza de um lado do corpo"
      },
      {
        "id": "small_dents_in_nails",
        "nome": "pequenos amassados ??????nas unhas"
      },
      {
        "id": "inflammatory_nails",
        "nome": "unhas inflamat??rias"
      },
      {
        "id": "brittle_nails",
        "nome": "unhas quebradi??as"
      },
      {
        "id": "movement_stiffness",
        "nome": "rigidez do movimento"
      },
      {
        "id": "swollen_extremeties",
        "nome": "extremidades inchadas"
      },
      {
        "id": "swollen_legs",
        "nome": "pernas inchadas"
      },
      {
        "id": "swelling_joints",
        "nome": "articula????es inchadas"
      },
      {
        "id": "cold_hands_and_feets",
        "nome": "m??os e p??s frios"
      },
      {
        "id": "receiving_blood_transfusion",
        "nome": "recebendo transfus??o de sangue"
      },
      {
        "id": "receiving_unsterile_injections",
        "nome": "recebendo inje????es n??o est??reis"
      },
      {
        "id": "prominent_veins_on_calf",
        "nome": "veias proeminentes na panturrilha"
      },
      {
        "id": "scurring",
        "nome": "correndo"
      },
      {
        "id": "blister",
        "nome": "bolha"
      }
    );
    this.corpoTodos.push(
      {
        "id": "skin_rash",
        "nome": "erup????o cut??nea"
      },
      {
        "id": "yellowish_skin",
        "nome": "pele amarelada"
      },
      {
        "id": "red_spots_over_body",
        "nome": "manchas vermelhas no corpo"
      },
      {
        "id": "skin_peeling",
        "nome": "descama????o da pele"
      },
      {
        "id": "weight_gain",
        "nome": "ganho de peso"
      },
      {
        "id": "weight_loss",
        "nome": "perda de peso"
      },
      {
        "id": "obesity",
        "nome": "obesidade"
      },
      {
        "id": "high_fever",
        "nome": "febre alta"
      },
      {
        "id": "dehydration",
        "nome": "desidrata????o"
      },
      {
        "id": "mild_fever",
        "nome": "febre baixa"
      },
      {
        "id": "muscle_wasting",
        "nome": "perda de massa muscular"
      },
      {
        "id": "fatigue",
        "nome": "fadiga"
      },
      {
        "id": "malaise",
        "nome": "Mal-estar"
      },
      {
        "id": "coma",
        "nome": "coma"
      },
      {
        "id": "itching",
        "nome": "coceira"
      },
      {
        "id": "shivering",
        "nome": "estremecendo"
      },
      {
        "id": "chills",
        "nome": "arrepios"
      },
      {
        "id": "sweating",
        "nome": "sudorese"
      },
      {
        "id": "swollen_blood_vessels",
        "nome": "vasos sangu??neos inchados"
      },
      {
        "id": "toxic_look_(typhos)",
        "nome": "apar??ncia t??xica (tifo)"
      },
      {
        "id": "irregular_sugar_level",
        "nome": "n??vel de a????car irregular"
      }
    );
  }
  compareFn(c1: any, c2:any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  deleteMentaisArray(perfilIndex) {
    if(this.mentaisArray.controls.length > 1)
    {
      this.mentaisArray.removeAt(perfilIndex);
    }
  }
  deleteCabecasArray(perfilIndex) {
    if(this.cabecasArray.controls.length > 1)
    {
      this.cabecasArray.removeAt(perfilIndex);
    }
  }
  deleteFrontaisArray(perfilIndex) {
    if(this.frontaisArray.controls.length > 1)
    {
      this.frontaisArray.removeAt(perfilIndex);
    }
  }
  deleteExtremidadesArray(perfilIndex) {
    if(this.extremidadesArray.controls.length > 1)
    {
      this.extremidadesArray.removeAt(perfilIndex);
    }
  }
  deleteCorpoTodosArray(perfilIndex) {
    if(this.corpoTodosArray.controls.length > 1)
    {
      this.corpoTodosArray.removeAt(perfilIndex);
    }
  }
  addMentaisArray(): void {
    if(!this.mentaisArray.controls.some(x => x.get('id').value == '') && (this.mentaisArraySelecionados.length == this.mentaisArray.length))
    {
      var formArrayTipo = this.form.get('mentaisArray') as FormArray
      formArrayTipo.push(new FormGroup({
        id: new FormControl('', [Validators.required])
      }));
    }
  }
  addCabecasArray(): void {
    if(!this.cabecasArray.controls.some(x => x.get('id').value == '') && (this.cabecasArraySelecionados.length == this.cabecasArray.length))
    {
      var formArrayTipo = this.form.get('cabecasArray') as FormArray
      formArrayTipo.push(new FormGroup({
        id: new FormControl('', [Validators.required])
      }));
    }
  }
  addFrontaisArray(): void {
    if(!this.frontaisArray.controls.some(x => x.get('id').value == '') && (this.frontaisArraySelecionados.length == this.frontaisArray.length))
    {
      var formArrayTipo = this.form.get('frontaisArray') as FormArray
      formArrayTipo.push(new FormGroup({
        id: new FormControl('', [Validators.required])
      }));
    }
  }
  addExtremidadesArray(): void {
    if(!this.extremidadesArray.controls.some(x => x.get('id').value == '') && (this.extremidadesArraySelecionados.length == this.extremidadesArray.length))
    {
      var formArrayTipo = this.form.get('extremidadesArray') as FormArray
      formArrayTipo.push(new FormGroup({
        id: new FormControl('', [Validators.required])
      }));
    }
  }
  addCorpoTodosArray(): void {
    if(!this.corpoTodosArray.controls.some(x => x.get('id').value == '') && (this.corpoTodosArraySelecionados.length == this.corpoTodosArray.length))
    {
      var formArrayTipo = this.form.get('corpoTodosArray') as FormArray
      formArrayTipo.push(new FormGroup({
        id: new FormControl('', [Validators.required])
      }));
    }
  }
  async calcular(){
    let stringSintomas = "";
    this.cabecasArraySelecionados.forEach(x => {
      stringSintomas = stringSintomas + x + ","
    });
    this.mentaisArraySelecionados.forEach(x => {
      stringSintomas = stringSintomas + x + ","
    });
    this.frontaisArraySelecionados.forEach(x => {
      stringSintomas = stringSintomas + x + ","
    });
    this.extremidadesArraySelecionados.forEach(x => {
      stringSintomas = stringSintomas + x + ","
    });
    this.corpoTodosArraySelecionados.forEach(x => {
      stringSintomas = stringSintomas + x + ","
    });
    let form = {sintomas: stringSintomas}
    let teste = null;
    await this.http.post('https://PredicaoDoenca.gabriel-duarte1.repl.co/calcular', form).subscribe(
      data => alert("Com base dos sintomas sua doen??a ??: " + data['result']),
      error => console.error(error)
    );



  }

}
