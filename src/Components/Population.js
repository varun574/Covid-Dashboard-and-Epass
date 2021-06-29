import React, { Component } from 'react'
import axios from "axios";
import { Container, Table, Row, Col,Card, ToastBody,Button } from 'react-bootstrap'
import { Toast } from 'react-bootstrap';
import population1 from '../population3.jpg'
import { event } from 'jquery';
class Population extends Component {
    constructor(props) {
        super(props)

        this.state = {
            worldpop: [],
            worldcorono: [
                { country: "World", population: 7795232630 },
                { country: "Afghanistan", population: 37172386 },
                { country: "Albania", population: 2866376 },
                {
                    country: "Algeria",
                    population: 42228429
                },
                {
                    country: "American Samoa",
                    population: 55465
                },
                {
                    country: "Andorra",
                    population: 77006
                },
                {
                    country: "Angola",
                    population: 30809762
                },
                {
                    country: "Anguilla",
                    population: 15094
                },
                {
                    country: "Antarctica",
                    population: 1106
                },
                {
                    country: "Antigua and Barbuda",
                    population: 96286
                },
                {
                    country: "Argentina",
                    population: 44494502
                },
                {
                    country: "Armenia",
                    population: 2951776
                },
                {
                    country: "Aruba",
                    population: 105845
                },
                {
                    country: "Australia",
                    population: 24982688
                },
                {
                    country: "Austria",
                    population: 8840521
                },
                {
                    country: "Azerbaijan",
                    population: 9939800
                },
                {
                    country: "Bahamas",
                    population: 385640
                },
                {
                    country: "Bahrain",
                    population: 1569439
                },
                {
                    country: "Bangladesh",
                    population: 161356039
                },
                {
                    country: "Barbados",
                    population: 286641
                },
                {
                    country: "Belarus",
                    population: 9483499
                },
                {
                    country: "Belgium",
                    population: 11433256
                },
                {
                    country: "Belize",
                    population: 383071
                },
                {
                    country: "Benin",
                    population: 11485048
                },
                {
                    country: "Bermuda",
                    population: 63973
                },
                {
                    country: "Bhutan",
                    population: 754394
                },
                {
                    country: "Bolivia",
                    population: 11353142
                },
                {
                    country: "Bosnia and Herzegovina",
                    population: 3323929
                },
                {
                    country: "Botswana",
                    population: 2254126
                },
                {
                    country: "Bouvet Island",
                    population: 0
                },
                {
                    country: "Brazil",
                    population: 209469333
                },
                {
                    country: "British Indian Ocean Territory",
                    population: 0
                },
                {
                    country: "Brunei",
                    population: 428962
                },
                {
                    country: "Bulgaria",
                    population: 7025037
                },
                {
                    country: "Burkina Faso",
                    population: 19751535
                },
                {
                    country: "Burundi",
                    population: 11175378
                },
                {
                    country: "Cambodia",
                    population: 16249798
                },
                {
                    country: "Cameroon",
                    population: 25216237
                },
                {
                    country: "Canada",
                    population: 37057765
                },
                {
                    country: "Cape Verde",
                    population: 543767
                },
                {
                    country: "Cayman Islands",
                    population: 64174
                },
                {
                    country: "Central African Republic",
                    population: 4666377
                },
                {
                    country: "Chad",
                    population: 15477751
                },
                {
                    country: "Chile",
                    population: 18729160
                },
                {
                    country: "China",
                    population: 1392730000
                },
                {
                    country: "Christmas Island",
                    population: 1402
                },
                {
                    country: "Cocos (Keeling) Islands",
                    population: 596
                },
                {
                    country: "Colombia",
                    population: 49648685
                },
                {
                    country: "Comoros",
                    population: 832322
                },
                {
                    country: "Congo",
                    population: 5244363
                },
                {
                    country: "Cook Islands",
                    population: 17379
                },
                {
                    country: "Costa Rica",
                    population: 4999441
                },
                {
                    country: "Croatia",
                    population: 4087843
                },
                {
                    country: "Cuba",
                    population: 11338138
                },
                {
                    country: "Cyprus",
                    population: 1189265
                },
                {
                    country: "Czechia",
                    population: 10629928
                },
                {
                    country: "Denmark",
                    population: 5793636
                },
                {
                    country: "Djibouti",
                    population: 958920
                },
                {
                    country: "Dominica",
                    population: 71625
                },
                {
                    country: "Dominican Republic",
                    population: 10627165
                },
                {
                    country: "East Timor",
                    population: 1267972
                },
                {
                    country: "Ecuador",
                    population: 17084357
                },
                {
                    country: "Egypt",
                    population: 98423595
                },
                {
                    country: "El Salvador",
                    population: 6420744
                },
                {
                    country: "England",
                    population: 55619400
                },
                {
                    country: "Equatorial Guinea",
                    population: 1308974
                },
                {
                    country: "Eritrea",
                    population: 6213972
                },
                {
                    country: "Estonia",
                    population: 1321977
                },
                {
                    country: "Ethiopia",
                    population: 109224559
                },
                {
                    country: "Falkland Islands",
                    population: 2840
                },
                {
                    country: "Faroe Islands",
                    population: 48497
                },
                {
                    country: "Fiji Islands",
                    population: 883483
                },
                {
                    country: "Finland",
                    population: 5515525
                },
                {
                    country: "France",
                    population: 66977107
                },
                {
                    country: "French Guiana",
                    population: 290691
                },
                {
                    country: "French Polynesia",
                    population: 277679
                },
                {
                    country: "French Southern territories",
                    population: 0
                },
                {
                    country: "Gabon",
                    population: 2119275
                },
                {
                    country: "Gambia",
                    population: 2280102
                },
                {
                    country: "Georgia",
                    population: 3726549
                },
                {
                    country: "Germany",
                    population: 82905782
                },
                {
                    country: "Ghana",
                    population: 29767108
                },
                {
                    country: "Gibraltar",
                    population: 33718
                },
                {
                    country: "Greece",
                    population: 10731726
                },
                {
                    country: "Greenland",
                    population: 56025
                },
                {
                    country: "Grenada",
                    population: 111454
                },
                {
                    country: "Guadeloupe",
                    population: 395700
                },
                {
                    country: "Guam",
                    population: 165768
                },
                {
                    country: "Guatemala",
                    population: 17247807
                },
                {
                    country: "Guinea",
                    population: 12414318
                },
                {
                    country: "Guinea-Bissau",
                    population: 1874309
                },
                {
                    country: "Guyana",
                    population: 779004
                },
                {
                    country: "Haiti",
                    population: 11123176
                },
                {
                    country: "Heard Island and McDonald Islands",
                    population: 0
                },
                {
                    country: "Holy See (Vatican City State)",
                    population: 825
                },
                {
                    country: "Honduras",
                    population: 9587522
                },
                {
                    country: "Hong Kong",
                    population: 7451000
                },
                {
                    country: "Hungary",
                    population: 9775564
                },
                {
                    country: "Iceland",
                    population: 352721
                },
                {
                    country: "India",
                    population: 1352617328
                },
                {
                    country: "Indonesia",
                    population: 267663435
                },
                {
                    country: "Iran",
                    population: 81800269
                },
                {
                    country: "Iraq",
                    population: 38433600
                },
                {
                    country: "Ireland",
                    population: 4867309
                },
                {
                    country: "Israel",
                    population: 8882800
                },
                {
                    country: "Italy",
                    population: 60421760
                },
                {
                    country: "Ivory Coast",
                    population: 25069229
                },
                {
                    country: "Jamaica",
                    population: 2934855
                },
                {
                    country: "Japan",
                    population: 126529100
                },
                {
                    country: "Jordan",
                    population: 9956011
                },
                {
                    country: "Kazakhstan",
                    population: 18272430
                },
                {
                    country: "Kenya",
                    population: 51393010
                },
                {
                    country: "Kiribati",
                    population: 115847
                },
                {
                    country: "Kuwait",
                    population: 4137309
                },
                {
                    country: "Kyrgyzstan",
                    population: 6322800
                },
                {
                    country: "Laos",
                    population: 7061507
                },
                {
                    country: "Latvia",
                    population: 1927174
                },
                {
                    country: "Lebanon",
                    population: 6848925
                },
                {
                    country: "Lesotho",
                    population: 2108132
                },
                {
                    country: "Liberia",
                    population: 4818977
                },
                {
                    country: "Libya",
                    population: 6678567
                },
                {
                    country: "Liechtenstein",
                    population: 37910
                },
                {
                    country: "Lithuania",
                    population: 2801543
                },
                {
                    country: "Luxembourg",
                    population: 607950
                },
                {
                    country: "Macao",
                    population: 631636
                },
                {
                    country: "North Macedonia",
                    population: 2084367
                },
                {
                    country: "Madagascar",
                    population: 26262368
                },
                {
                    country: "Malawi",
                    population: 18143315
                },
                {
                    country: "Malaysia",
                    population: 31528585
                },
                {
                    country: "Maldives",
                    population: 515696
                },
                {
                    country: "Mali",
                    population: 19077690
                },
                {
                    country: "Malta",
                    population: 484630
                },
                {
                    country: "Marshall Islands",
                    population: 58413
                },
                {
                    country: "Martinique",
                    population: 376480
                },
                {
                    country: "Mauritania",
                    population: 4403319
                },
                {
                    country: "Mauritius",
                    population: 1265303
                },
                {
                    country: "Mayotte",
                    population: 270372
                },
                {
                    country: "Mexico",
                    population: 126190788
                },
                {
                    country: "Micronesia, Federated States of",
                    population: 112640
                },
                {
                    country: "Moldova",
                    population: 2706049
                },
                {
                    country: "Monaco",
                    population: 38682
                },
                {
                    country: "Mongolia",
                    population: 3170208
                },
                {
                    country: "Montenegro",
                    population: 631219
                },
                {
                    country: "Montserrat",
                    population: 5900
                },
                {
                    country: "Morocco",
                    population: 36029138
                },
                {
                    country: "Mozambique",
                    population: 29495962
                },
                {
                    country: "Myanmar",
                    population: 53708395
                },
                {
                    country: "Namibia",
                    population: 2448255
                },
                {
                    country: "Nauru",
                    population: 12704
                },
                {
                    country: "Nepal",
                    population: 28087871
                },
                {
                    country: "Netherlands",
                    population: 17231624
                },
                {
                    country: "Netherlands Antilles",
                    population: 227049
                },
                {
                    country: "New Caledonia",
                    population: 284060
                },
                {
                    country: "New Zealand",
                    population: 4841000
                },
                {
                    country: "Nicaragua",
                    population: 6465513
                },
                {
                    country: "Niger",
                    population: 22442948
                },
                {
                    country: "Nigeria",
                    population: 195874740
                },
                {
                    country: "Niue",
                    population: 1624
                },
                {
                    country: "Norfolk Island",
                    population: 2169
                },
                {
                    country: "North Korea",
                    population: 25549819
                },
                {
                    country: "Northern Ireland",
                    population: 1885400
                },
                {
                    country: "Northern Mariana Islands",
                    population: 56882
                },
                {
                    country: "Norway",
                    population: 5311916
                },
                {
                    country: "Oman",
                    population: 4829483
                },
                {
                    country: "Pakistan",
                    population: 212215030
                },
                {
                    country: "Palau",
                    population: 17907
                },
                {
                    country: "Palestine",
                    population: 4569087
                },
                {
                    country: "Panama",
                    population: 4176873
                },
                {
                    country: "Papua New Guinea",
                    population: 8606316
                },
                {
                    country: "Paraguay",
                    population: 6956071
                },
                {
                    country: "Peru",
                    population: 31989256
                },
                {
                    country: "Philippines",
                    population: 106651922
                },
                {
                    country: "Pitcairn",
                    population: 67
                },
                {
                    country: "Poland",
                    population: 37974750
                },
                {
                    country: "Portugal",
                    population: 10283822
                },
                {
                    country: "Puerto Rico",
                    population: 3195153
                },
                {
                    country: "Qatar",
                    population: 2781677
                },
                {
                    country: "Réunion",
                    population: 859959
                },
                {
                    country: "Romania",
                    population: 19466145
                },
                {
                    country: "Russia",
                    population: 144478050
                },
                {
                    country: "Rwanda",
                    population: 12301939
                },
                {
                    country: "Saint Helena",
                    population: 6600
                },
                {
                    country: "Saint Kitts and Nevis",
                    population: 52441
                },
                {
                    country: "Saint Lucia",
                    population: 181889
                },
                {
                    country: "Saint Pierre and Miquelon",
                    population: 5888
                },
                {
                    country: "Saint Vincent and the Grenadines",
                    population: 110210
                },
                {
                    country: "Samoa",
                    population: 196130
                },
                {
                    country: "San Marino",
                    population: 33785
                },
                {
                    country: "Sao Tome and Principe",
                    population: 211028
                },
                {
                    country: "Saudi Arabia",
                    population: 33699947
                },
                {
                    country: "Scotland",
                    population: 5424800
                },
                {
                    country: "Senegal",
                    population: 15854360
                },
                {
                    country: "Serbia",
                    population: 6963764
                },
                {
                    country: "Seychelles",
                    population: 96762
                },
                {
                    country: "Sierra Leone",
                    population: 7650154
                },
                {
                    country: "Singapore",
                    population: 5638676
                },
                {
                    country: "Slovakia",
                    population: 5446771
                },
                {
                    country: "Slovenia",
                    population: 2073894
                },
                {
                    country: "Solomon Islands",
                    population: 652858
                },
                {
                    country: "Somalia",
                    population: 15008154
                },
                {
                    country: "South Africa",
                    population: 57779622
                },
                {
                    country: "South Georgia and the South Sandwich Islands",
                    population: 30
                },
                {
                    country: "S. Korea",
                    population: 51606633
                },
                {
                    country: "South Sudan",
                    population: 10975920
                },
                {
                    country: "Spain",
                    population: 46796540
                },
                {
                    country: "Sri Lanka",
                    population: 21670000
                },
                {
                    country: "Sudan",
                    population: 41801533
                },
                {
                    country: "Suriname",
                    population: 575991
                },
                {
                    country: "Svalbard and Jan Mayen",
                    population: 2572
                },
                {
                    country: "Swaziland",
                    population: 1136191
                },
                {
                    country: "Sweden",
                    population: 10175214
                },
                {
                    country: "Switzerland",
                    population: 8513227
                },
                {
                    country: "Syria",
                    population: 16906283
                },
                {
                    country: "Taiwan",
                    population: 23816775
                },
                {
                    country: "Tajikistan",
                    population: 9100837
                },
                {
                    country: "Tanzania",
                    population: 56318348
                },
                {
                    country: "Thailand",
                    population: 69428524
                },
                {
                    country: "The Democratic Republic of Congo",
                    population: 84068091
                },
                {
                    country: "Togo",
                    population: 7889094
                },
                {
                    country: "Tokelau",
                    population: 1411
                },
                {
                    country: "Tonga",
                    population: 103197
                },
                {
                    country: "Trinidad and Tobago",
                    population: 1389858
                },
                {
                    country: "Tunisia",
                    population: 11565204
                },
                {
                    country: "Turkey",
                    population: 82319724
                },
                {
                    country: "Turkmenistan",
                    population: 5850908
                },
                {
                    country: "Turks and Caicos Islands",
                    population: 37665
                },
                {
                    country: "Tuvalu",
                    population: 11508
                },
                {
                    country: "Uganda",
                    population: 42723139
                },
                {
                    country: "Ukraine",
                    population: 44622516
                },
                {
                    country: "UAE",
                    population: 9630959
                },
                {
                    country: "UK",
                    population: 66460344
                },
                {
                    country: "USA",
                    population: 326687501
                },
                {
                    country: "United States Minor Outlying Islands",
                    population: 300
                },
                {
                    country: "Uruguay",
                    population: 3449299
                },
                {
                    country: "Uzbekistan",
                    population: 32955400
                },
                {
                    country: "Vanuatu",
                    population: 292680
                },
                {
                    country: "Venezuela",
                    population: 28870195
                },
                {
                    country: "Vietnam",
                    population: 95540395
                },
                {
                    country: "Virgin Islands, British",
                    population: 29802
                },
                {
                    country: "Virgin Islands, U.S.",
                    population: 106977
                },
                {
                    country: "Wales",
                    population: 3139000
                },
                {
                    country: "Wallis and Futuna",
                    population: 15289
                },
                {
                    country: "Western Sahara",
                    population: 652271
                },
                {
                    country: "Yemen",
                    population: 28498687
                },
                {
                    country: "Zambia",
                    population: 17351822
                },
                {
                    country: "Zimbabwe",
                    population: 14439018
                }
            ],
            CountryValue: [],
            NewApi: [],
            NewApiMap: new Map(),
            search_ele:'',
            message:'',
            country_population:'',
            searchClicked:false,
            showCard:true,
            NewApiMapsmallCase:new Map(),
            resultMap:new Map(),
            percentage:0
        }

    }

    componentDidMount() {
        var tempMap = new Map();
        var temp1Map=new Map();
        var temp2Map=new Map();
        this.state.worldcorono.map(countryName => {
            tempMap.set(countryName.country, countryName.population);
        })
        this.state.worldcorono.map(countryName => {
            temp1Map.set(countryName.country.toLowerCase(), countryName.population);
        })

        this.setState({
            NewApiMap: tempMap,
            NewApiMapsmallCase:temp1Map
        })
        
        // this.state.
        // console.log(this.state.worldcorono);
        const options = {
            method: 'GET',
            url: 'https://world-population.p.rapidapi.com/worldpopulation',
            headers: {
                'x-rapidapi-key': '6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08',
                'x-rapidapi-host': 'world-population.p.rapidapi.com'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data);
            this.setState({
                worldpop: response.data
            })
        })
            .then(response => {
                this.setWorldPopulation();
            })
            .then(response => {
                this.getAllCountries();
            })
            .catch(function (error) {
                console.error(error);
            });

    }
    getAllCountries = () => {

        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(response => response.json())
            .then(response => { this.setState({ worldcorono: response }) })
            .then(response => { this.display() })
            .then(response=>{
                var temp4Map=new Map();
                this.state.worldcorono.map(Temp=>{
                    temp4Map.set(Temp.country.toLowerCase(),Temp.cases)
                })
                 console.log(temp4Map)
                    this.setState({
                        resultMap:temp4Map
                    })
                })
      
    }
    display = () => {
        console.log(this.state.worldcorono)
    }
    Buttonhandler=(event)=>{
        
        var x=document.getElementById("search").value;
        console.log(this.state.NewApiMapsmallCase);
        if(!(this.state.NewApiMapsmallCase.get(x.toLowerCase()))){
            console.log(this.state.NewApiMapsmallCase.get(x.toLowerCase()))
            this.setState({
                showCard:false
            })
            }
        else{
            this.setState({
            message:x.toUpperCase(),
            country_population:this.state.NewApiMapsmallCase.get(x.toLowerCase()),
            percentage:((this.state.resultMap.get(x.toLowerCase())*100)/(this.state.NewApiMapsmallCase.get(x.toLowerCase()))).toFixed(2)
    
        },()=>{
            this.setState({
                searchClicked:true,
                showCard:true
            })
        })

              }
        
            // alert(x+" "+this.state.NewApiMap.get(x));
        
            
    }
    tableDisplay = () => {
        return this.state.worldcorono
        .map(countryName => {
            return (
                <tr key={countryName.country} style={{}}>
                    <td style={{textAlign:'center',backgroundColor:'white',color:'black'}}>
                        {countryName.country}
                    </td>
                    <td style={{textAlign:'center',backgroundColor:''}}>
                    {/* #ffffb3 */}
                        {(this.state.NewApiMap.get(countryName.country))}
                    </td>
                    <td style={{textAlign:'center',backgroundColor:''}}>
                        {((countryName.cases * 100) / (this.state.NewApiMap.get(countryName.country))).toFixed(2)}%
                    </td>
                </tr>
            )
        })
    }
    setWorldPopulation = () => {
        console.log(this.state.CountryValue)
        document.getElementById("totalCountries").innerHTML += " " + this.state.worldpop.body.total_countries;
        document.getElementById("worldPopulation").innerHTML += " " + (this.state.worldpop.body.world_population / 1000000000).toFixed(2) + " Billion";
    }
    searchHandler=(event)=>{
        this.setState({
            search_ele:event.target.value
        })
    }
    render() {
        // console.log(this.state.worldcorono)
        // console.log(this.state.resultMap)
        // console.log(this.state.NewApiMap)
        // console.log(this.state.NewApiMapsmallCase)
        return (
            <div>
{/* style={{backgroundImage:`url(${population1})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}} */}
                {/* Population */}
                <br></br>
                
                <br></br>
                <br></br>
                <Row>
                    <Col sm="7"></Col>
                    <Col>
                    <input id="search" type="text" style={{width:'300px',height:'40px',fontSize:'20px'}} value={this.state.search_ele} onChange={this.searchHandler} placeholder="Search..."></input>      
               
                    <button type="button" onClick={this.Buttonhandler} style={{width:'50px',height:'40px',border:'none',backgroundColor:'white'}}><i class="fa fa-search" style={{fontSize:'24px'}}></i></button>
                     </Col>
                </Row>
               
                <br></br>
                <Row>
                    <Col  ></Col>
                <Col>
                    {(this.state.searchClicked && this.state.message && this.state.showCard)?
                       <Card style={{width:'400px'}}>
                             <Card.Header style={{height:'45px',backgroundColor:'white'}}>
                             <Button style={{float:'right',color:'red',fontSize:'20px'}} variant="active"  onClick={()=>{this.setState({searchClicked:false,search_ele:''})}}>  <b>X</b></Button>
                           
                             </Card.Header>
                           <Card.Body style={{backgroundColor:''}}>
                                
                           <h4 style={{fontSize:'25px',textAlign:'center',backgroundColor:'',color:'#96ceb4'}}>{this.state.message}</h4> <br></br>
                            <p style={{fontSize:'20px',textAlign:'center'}}>Population :  {this.state.country_population}</p>
                             <p style={{fontSize:'20px',textAlign:'center'}}>Percentage Effected : {this.state.percentage}%</p>
                           </Card.Body>
                       </Card>
                    :""}
                    </Col>
                    <Col ></Col>
                </Row>
                <br></br>
                <br></br>
                
                <Container>
                <Row>
                    <Col>
                        <h2 id="totalCountries" style={{marginLeft:'80px'}}>Total Countries :</h2>
                    </Col>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <h2 id="worldPopulation" style={{marginLeft:'10px'}}>World Population :</h2>
                    </Col>
                    
                </Row>
                <br></br>
                    <Table stripped hover bordered  >

                        <thead style={{}}>
                            <tr>
                                <th style={{ fontSize: '20px',textAlign:'center',backgroundColor:'#5b9aa0',color:'white'}} >
                                    Country
                                </th>
                                <th style={{ fontSize: '20px',textAlign:'center',backgroundColor:'#96ceb4',color:'white' }}>
                                    Population
                                </th>
                                <th style={{ fontSize: '20px',textAlign:'center',backgroundColor:'#5b9aa0',color:'white' }}>
                                    Percentage Affected
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tableDisplay()}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

export default Population

