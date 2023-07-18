import { Component } from 'react'
import calcStyles from '../../views/calculator/calcStyles.css'
// import '../../views/calculator/NewCss.css'

export class My_calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            number: "", 
            output: "",
            showScientificCalculator: false
        };
        this.click = this.click.bind(this);
        this.reset = this.reset.bind(this)
        this.operator = this.operator.bind(this)
        // this.getResult = this.getResult.bind(this)
    }

    click = (e) => {
		const value = e.target.value;
		this.setState((prevState) => ({
			number: prevState.number + value
		}));
	};
    

    handleSquareRoot = () => {
        const { number } = this.state;
        const value = parseFloat(number);
        const result = Math.sqrt(value);
        this.setState({
        number: String(result),
        });
    };

    handleSin = () => {
        const { number } = this.state;
        const value = parseFloat(number);
        const result = Math.sin(value);
        this.setState({
        number: String(result),
        });
    };

    handleCos = () => {
        const { number } = this.state;
        const value = parseFloat(number);
        const result = Math.cos(value);
        this.setState({
        number: String(result),
        });
    };

    handleTan = () => {
        const { number } = this.state;
        const value = parseFloat(number);
        const result = Math.tan(value);
        this.setState({
        number: String(result),
        });
    };

    handlePowerRaisedToTwo = () => {
        const { number } = this.state;
        const value = parseFloat(number);
        const result = Math.pow(value, 2);
        this.setState({
        number: String(result),
        });
    };

    handlePowerRaisedToThree = () => {
        const { number } = this.state;
        const value = parseFloat(number);
        const result = Math.pow(value, 3);
        this.setState({
        number: String(result),
        });
    };


    handleLog = () => {
        const { number } = this.state;
        const value = parseFloat(number);
        const result = Math.log10(value);
        this.setState({
        number: String(result),
        });
    };
    
    handlePi = () => {
        this.setState({
        number: String(Math.PI),
        });
    };

    reset = () => {
		this.setState({
			number: "",
            output: ""
		});
	};
    

    operator = () => {
		const { number } = this.state;
		try {
			const result = eval(number);
			this.setState({
                number: number,
				output: `${" = " + result}` 
			});
		} catch (error) {
			console.error("Err");
		}
	};

    handleScientificCalc = () => {
        this.setState((prevState) => ({
        showScientificCalculator: !prevState.showScientificCalculator,
        }));
    };

    render(){
        const {showScientificCalculator} = this.state
        return(
            <div className='bg'>
                <div className="main-container">
                    <div className="calculator">
                        <div className="myCalc">
                            <div className="top-calc">
                                <div className="full-display">
                                    <h1 className='first-display'>{this.state.number}</h1>
                                    <p className='first-display'>{this.state.output}</p>
                                </div>
                            </div>
                            <div className="buttons-container">
                                {showScientificCalculator ? (
                                    <div className='but-cont'>       
                                        <div className="button-cont">
                                    <div className="row-sci">
                                    <input type="button" value={"C"} className='input-tag' onClick={this.reset} />
                                    <input type="button" value={"-/+"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"%"} className='input-tag' onClick={this.click} />
                                    
                                    <input type="button" value={'√'} className="input-tag" onClick={this.handleSquareRoot} />
                                    <input type="button" value={'π'} className="input-tag" onClick={this.handlePi} />
                                    
                                    <input type="button" value={'cos'} className="input-tag" onClick={this.handleCos} />
                                    <input type="button" value={'tan'} className="input-tag" onClick={this.handleTan} />
                                    <input type="button" value={'x^2'} className="input-tag" onClick={this.handlePowerRaisedToTwo} />
                                    <input type="button" value={'x^3'} className="input-tag" onClick={this.handlePowerRaisedToThree} />
                                    <input type="button" value={"/"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={'log'} className="input-tag" onClick={this.handleLog} />
                                    <input type="button" value={'sin'} className="input-tag" onClick={this.handleSin} />
                                    <input type="button" value={"7"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"8"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"*"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"9"} className='input-tag' onClick={this.click} />
                                    
                                    <input type="button" value={"4"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"5"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"6"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"-"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"1"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"2"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"3"} className='input-tag' onClick={this.click} />
                                    
                                    <input type="button" value={"0"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"+"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"."} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"00"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"sci"} className='input-tag' onClick={this.handleScientificCalc} />
                                    
                                    <input type="button" value={"."} className='input-tag' onClick={this.click} />
                                    <input type="button" value="=" className='equals input-tag'  onClick={this.operator} />
                                    </div>
                                    
                                </div>
                                    </div>
                                ) : (
                                <div>
                                    <div className="button-cont">
                                    <div className="row">
                                    <input type="button" value={"C"} className='input-tag' onClick={this.reset} />
                                    <input type="button" value={"-/+"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"%"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"/"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"7"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"8"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"9"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"*"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"4"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"5"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"6"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"-"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"1"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"2"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"3"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"+"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"sci"} className='input-tag' onClick={this.handleScientificCalc} />
                                    <input type="button" value={"0"} className='input-tag' onClick={this.click} />
                                    <input type="button" value={"."} className='input-tag' onClick={this.click} />
                                    <input type="button" value="=" className='equals input-tag'  onClick={this.operator} />
                                    </div>
                                    
                                </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}