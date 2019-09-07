var gear_fallback = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      [No gear template for this subcategory!]
    </div>
  `}

var gear_generic = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  computed: {
    notesnotsummary: function() {
      //Just peek at the first one
      let firstitem = this.subcategory.items[0];
      if(firstitem && firstitem.notes){
        return true;
      }
    }
  },
  methods: {
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui sortable celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cmp/GP</th>
            <th v-if="notesnotsummary">Notes</th><th v-else>Summary</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)"><a>{{item.name | titlecase}}</a></td>
              <td>{{item['complexity/gp']}}</td>
              <td v-if="notesnotsummary">{{item.notes}}</td><td v-else>{{item.summary}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_drugs = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  methods: {
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui sortable celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cmp/GP</th>
            <th>Type</th>
            <th>Application</th>
            <th>Duration</th>
            <th>Addiction</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)"><a>{{item.name | titlecase}}</a></td>
              <td>{{item['complexity/gp']}}</td>
              <td>{{item.type}}</td>
              <td>{{item.application}}</td>
              <td>{{item.duration}}</td>
              <td>{{item.addiction}}</td>
              <td>{{item.summary}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_ware = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  methods: {
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui sortable celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cmp/GP</th>
            <th>Bio</th>
            <th>Cybr</th>
            <th>Hard</th>
            <th>Mesh</th>
            <th>Nano</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)"><a>{{item.name | titlecase}}</a></td>
              <td>{{item['complexity/gp']}}</td>
              <td><i v-if="item.bioware" class="large green checkmark icon"></i></td>
              <td><i v-if="item.cyberware" class="large green checkmark icon"></i></td>
              <td><i v-if="item.hardware" class="large green checkmark icon"></i></td>
              <td><i v-if="item.meshware" class="large green checkmark icon"></i></td>
              <td><i v-if="item.nanoware" class="large green checkmark icon"></i></td>
              <td>{{item.summary}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_vehicles = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  methods: {
    english_list: function (arr) {
        return arr.join(", ");
    },
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cmp/GP</th>
            <th>Pass</th>
            <th>Vigor</th>
            <th>Flex</th>
            <th>Armor</th>
            <th>WT</th>
            <th>DUR</th>
            <th>DR</th>
            <th>Size</th>
            <th>Movement</th>
            <th>Ware</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)"><a>{{item.name | titlecase}}</a></td>
              <td>{{item['complexity/gp']}}</td>
              <td>{{item.passengers}}</td>
              <td>{{item.vigor}}</td>
              <td>{{item.flex}}</td>
              <td>{{item.armor_energy}}/{{item.armor_kinetic}}</td>
              <td>{{item.wound_threshold}}</td>
              <td>{{item.durability}}</td>
              <td>{{item.death_rating}}</td>
              <td>{{item.size}}</td>
              <td><movement-types :types="item.movement_rate"></movement-types></td>
              <td>{{english_list(item.ware)}}</td>
              <td>{{item.notes}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_bots = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  methods: {
    english_list: function (arr) {
        return arr.join(", ");
    },
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cmp/GP</th>
            <th>Vigor</th>
            <th>Flex</th>
            <th>Armor</th>
            <th>WT</th>
            <th>DUR</th>
            <th>DR</th>
            <th>Size</th>
            <th>Movement</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)" rowspan="2"><a>{{item.name | titlecase}}</a></td>
              <td>{{item['complexity/gp']}}</td>
              <td>{{item.vigor}}<span v-if="item.vigor2">&nbsp;({{item.vigor2}})</span></td>
              <td>{{item.flex}}</td>
              <td>{{item.armor_energy}}/{{item.armor_kinetic}}</td>
              <td>{{item.wound_threshold}}</td>
              <td>{{item.durability}}</td>
              <td>{{item.death_rating}}</td>
              <td>{{item.size}}</td>
              <td><movement-types :types="item.movement_rate"></movement-types></td>
            </tr>
            <tr>
              <td colspan="9"><b>Ware: </b>{{english_list(item.ware)}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_creatures = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  methods: {
    english_list: function (arr) {
        return arr.join(", ");
    },
    namerowspan: function(item) {
      let span = 2; //At least name and movement row
      if(item.ware.length){span++;}
      if(item.traits.length){span++;}
      if(item.notes.length){span++;}
      if(item.skills.length){span++;}
      return span;
    },
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cmp/GP</th>
            <th>COG</th>
            <th>INT</th>
            <th>REF</th>
            <th>SAV</th>
            <th>SOM</th>
            <th>WIL</th>
            <th>INIT</th>
            <th>TP</th>
            <th>Armor</th>
            <th>WT/DUR/DR</th>
            <th>TT/LUC/IR</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)" :rowspan="namerowspan(item)"><a>{{item.name | titlecase}}</a></td>
              <td>{{item['complexity/gp']}}</td>
              <td>{{item.attributes.cognition}}<sup>{{item.attributes.cognition_check}}</sup></td>
              <td>{{item.attributes.intuition}}<sup>{{item.attributes.intuition_check}}</sup></td>
              <td>{{item.attributes.reflexes}}<sup>{{item.attributes.reflexes_check}}</sup></td>
              <td>{{item.attributes.savvy}}<sup>{{item.attributes.savvy_check}}</sup></td>
              <td>{{item.attributes.somatics}}<sup>{{item.attributes.somatics_check}}</sup></td>
              <td>{{item.attributes.willpower}}<sup>{{item.attributes.willpower_check}}</sup></td>
              <td>{{item.attributes.initiative}}</td>
              <td>{{item.attributes.tp}}</td>
              <td>{{item.attributes.armor_energy}}/{{item.attributes.armor_kinetic}}</td>
              <td>{{item.attributes.wound_threshold}}/{{item.attributes.durability}}/{{item.attributes.death_rating}}</td>
              <td>{{item.attributes.trauma_threshold}}/{{item.attributes.lucidity}}/{{item.attributes.insanity_rating}}</td>
            </tr>
            <tr v-if="item.ware.length">
              <td colspan="12"><b>Ware: </b>{{english_list(item.ware)}}</td>
            </tr>
            <tr v-if="item.traits.length">
              <td colspan="12"><b>Traits: </b>{{english_list(item.traits)}}</td>
            </tr>
            <tr v-if="item.skills.length">
              <td colspan="12"><b>Skills: </b>{{english_list(item.skills)}}</td>
            </tr>
            <tr v-if="item.notes">
              <td colspan="12"><b>Notes: </b>{{item.notes}}</td>
            </tr>
            <tr>
              <td colspan="12"><movement-types :types="item.movement_rate"></movement-types></td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_melee = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  computed: {
    warecategory: function (){
      //Just peek at the first one
      let firstitem = this.subcategory.items[0];
      if(firstitem && firstitem.waretype){
        return true;
      }
    }
  },
  methods: {
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui sortable celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th v-if="warecategory">Ware Type</th>
            <th>Damage [Avg]</th>
            <th>Cmp/GP</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)"><a>{{item.name | titlecase}}</a></td>
              <td v-if="warecategory">{{item.waretype}}</td>
              <td>{{item.damage}} [{{item.damage_avg}}]</td>
              <td>{{item['complexity/gp']}}</td>
              <td>{{item.notes}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_armor = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  computed: {
    warecategory: function (){
      //Just peek at the first one
      let firstitem = this.subcategory.items[0];
      if(firstitem && firstitem.waretype){
        return true;
      }
    }
  },
  methods: {
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui sortable celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th v-if="warecategory">Ware Type</th>
            <th>E/K Armor</th>
            <th>Stackable</th>
            <th>Cmp/GP</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)"><a>{{item.name | titlecase}}</a></td>
              <td v-if="warecategory">{{item.waretype}}</td>
              <td>{{item.energy}} / {{item.kinetic}}</td>
              <td><i v-if="item.stackable" class="large green checkmark icon"></i></td>
              <td>{{item['complexity/gp']}}</td>
              <td>{{item.notes}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_ranged = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  computed: {
    warecategory: function (){
      //Just peek at the first one
      let firstitem = this.subcategory.items[0];
      if(firstitem && firstitem.waretype){
        return true;
      }
    },
    aoecategory: function (){
      //Just peek at the first one
      let firstitem = this.subcategory.items[0];
      if(firstitem && firstitem.area){
        return true;
      }
    }
  },
  methods: {
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui sortable celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th v-if="warecategory">Ware Type</th>
            <th v-if="aoecategory">AoE</th>
            <th>Damage [Avg]</th>
            <th>Firemodes</th>
            <th>Ammo</th>
            <th>Range</th>
            <th v-if="aoecategory">Armor</th>
            <th>Cmp/GP</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)"><a>{{item.name | titlecase}}</a></td>
              <td v-if="warecategory">{{item.waretype}}</td>
              <td v-if="aoecategory">{{item.area}}</td>
              <td v-if="item.damage">{{item.damage}} [{{item.damage_avg}}]</td><td v-else>See Ammo</td>
              <td>{{item.firemodes}}</td>
              <td>{{item.ammo}}</td>
              <td>{{item.range}}</td>
              <td v-if="aoecategory">{{item.armor}}</td>
              <td>{{item['complexity/gp']}}</td>
              <td>{{item.notes}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_ammo_kinetic = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  methods: {
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui sortable celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th>Damage</th>
            <th>Cmp/GP<br>(per 100)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)"><a>{{item.name | titlecase}}</a></td>
              <td>{{item.damage}}</td>
              <td>{{item['complexity/gp']}}</td>
              <td>{{item.notes}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

var gear_ammo_seeker = {
  props: { 
    subcategory: Object, 
    categoryname: String, 
    subcategoryname: String,
    charslot: String,
    classhint: Function
  },
  methods: {
    modal_show: function(item) {
      $("#"+item.id).modal('show');
    }
  },
  template: `
    <div>
      <div :id="subcategoryname | despace" class="ui divider"></div>
      <h3 class="ui header inverted" style="margin:0;">{{subcategoryname | titlecase}}</h3>
      <span v-html="subcategory.text"></span>
      <table class="ui sortable celled table inverted">
        <thead>
          <tr>
            <th>Name</th>
            <th>AoE</th>
            <th>Damage [Avg]</th>
            <th>Armor</th>
            <th>Cmp/GP<br>(per 5)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in subcategory.items">
            <tr>
              <td class="selectable" style="cursor:help;" v-on:click="modal_show(item)"><a>{{item.name | titlecase}}</a></td>
              <td>{{item.areaeffect}}
              <td>{{item.damage}} [{{item.damage_avg}}]</td>
              <td>{{item.armor}}</td>
              <td>{{item['complexity/gp']}}</td>
              <td>{{item.notes}}</td>
            </tr>
            <gear-modal :id="item.id" :title="item.name" :content="item.description" :charslot="charslot" :inst="classhint"></gear-modal>
          </template>
        </tbody>
      </table>
    </div>
`}

//Map subcategories to templates to use
var gear_templates = {
  "Comms":{
      "Communication Gear": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Neutrino Comms Gear": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Quantum Farcasters": {template: gear_generic, charslot: "items", classhint: InvItem},
      "QE Comms Gear": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Mesh Hardware": {template: gear_generic, charslot: "items", classhint: InvItem}
  },
  "Creatures":{
      "GMOs": {template: gear_creatures, charslot: "", classhint: null},
      "Smart Animals": {template: gear_creatures, charslot: "", classhint: null},
      "Xenofauna": {template: gear_creatures, charslot: "", classhint: null}
  },
  "Drugs":{
      "Cognitive Drugs": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Combat Drugs": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Health Drugs": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Nanodrugs": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Narcoalgorithms": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Petals": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Psi Drugs": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Recreational": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Social Drugs": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Toxins": {template: gear_drugs, charslot: "items", classhint: InvItem},
      "Nanotoxins": {template: gear_drugs, charslot: "items", classhint: InvItem}
  },
  "Services":{
      "Mesh Services": {template: gear_generic, charslot: "", classhint: null},
      "Physical Services": {template: gear_generic, charslot: "", classhint: null}
  },
  "Software":{
      "Skillsoft": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Apps": {template: gear_generic, charslot: "items", classhint: InvItem},
      "ALIs": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Scorchers": {template: gear_generic, charslot: "items", classhint: InvItem},
      "TacNet": {template: gear_generic, charslot: "items", classhint: InvItem}
  },
  "Tech":{
      "Bots": {template: gear_bots, charslot: "bots", classhint: InvBot},
      "Everyday": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Chemicals": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Exploration Tools": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Salvage Tools": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Science Tools": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Survival Tools": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Vacsuits": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Nanotech Gear": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Hives": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Nanofabricators": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Specialized Fabbers": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Espionage/Security": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Swarms": {template: gear_generic, charslot: "items", classhint: InvItem}
  },
  "Vehicles":{
      "Aircraft": {template: gear_vehicles, charslot: "vehicles", classhint: InvVehicle},
      "Exoskeletons": {template: gear_vehicles, charslot: "vehicles", classhint: InvVehicle},
      "Groundcraft": {template: gear_vehicles, charslot: "vehicles", classhint: InvVehicle},
      "Hardsuits": {template: gear_vehicles, charslot: "vehicles", classhint: InvVehicle},
      "Hybrids": {template: gear_vehicles, charslot: "vehicles", classhint: InvVehicle},
      "Nautical Craft": {template: gear_vehicles, charslot: "vehicles", classhint: InvVehicle},
      "Pers Transport": {template: gear_vehicles, charslot: "vehicles", classhint: InvVehicle},
      "Spacecraft": {template: gear_vehicles, charslot: "vehicles", classhint: InvVehicle}
  },
  "Ware":{
      "Combat": {template: gear_ware, charslot: "ware", classhint: InvWare},
      "Mental": {template: gear_ware, charslot: "ware", classhint: InvWare},
      "Physical": {template: gear_ware, charslot: "ware", classhint: InvWare},
      "Sensory": {template: gear_ware, charslot: "ware", classhint: InvWare},
      "Social": {template: gear_ware, charslot: "ware", classhint: InvWare},
      "Standard": {template: gear_ware, charslot: "ware", classhint: InvWare},
      "Meshware": {template: gear_ware, charslot: "ware", classhint: InvWare}
  },
  "Melee Weapons":{
      "Melee Ware": {template: gear_melee, charslot: "weapons_melee", classhint: InvWep},
      "Melee Weapons": {template: gear_melee, charslot: "weapons_melee", classhint: InvWep},
      "Improvised Melee": {template: gear_melee, charslot: "weapons_melee", classhint: InvWep}
  },
  "Ranged Weapons":{
      "Ranged Ware": {template: gear_ranged, charslot: "weapons_ranged", classhint: InvRangedWep},
      "Beam Weapons": {template: gear_ranged, charslot: "weapons_ranged", classhint: InvRangedWep},
      "Spray Weapons": {template: gear_ranged, charslot: "weapons_ranged", classhint: InvRangedWep},
      "Kinetic Weapons": {template: gear_ranged, charslot: "weapons_ranged", classhint: InvRangedWep},
      "Seeker Weapons": {template: gear_ranged, charslot: "weapons_ranged", classhint: InvRangedWep},
      "Weapon Mods": {template: gear_generic, charslot: "items", classhint: InvItem},
      "Kinetic Ammo": {template: gear_ammo_kinetic, charslot: "items", classhint: InvItem},
      "Seeker/Grenade Ammo": {template: gear_ammo_seeker, charslot: "items", classhint: InvItem}
  },
  "Armor":{
    "Armor Ware": {template: gear_armor, charslot: "armor", classhint: InvArmor},
    "Armor Gear": {template: gear_armor, charslot: "armor", classhint: InvArmor},
    "Armor Mods": {template: gear_generic, charslot: "armor", classhint: InvArmor}
  }
}