import React from 'react';
import '../../views/calculator/Currency.css'

class CurrencyConverter extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    baseCurrency: 'USD',
    targetCurrency: 'EUR',
    baseAmount: '',
    targetAmount: '',
    exchangeRates: {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110.62,
        NGN: 750,
    },
    };
}

click = (e) => {
    const value = e.target.value;
    this.setState((prevState) => ({
        baseAmount: prevState.baseAmount + value,
    }),
    this.convertCurrency
    );
    
};

handleBaseCurrencyChange = (event) => {
    this.setState({
        baseCurrency: event.target.value }, 
        this.convertCurrency);
};

handleTargetCurrencyChange = (event) => {
    this.setState({ 
        targetCurrency: event.target.value }, 
        this.convertCurrency);
};

handleBaseAmountChange = (event) => {
    this.setState({ 
        baseAmount: event.target.value }, 
        this.convertCurrency);
};

convertCurrency = () => {
    const { baseCurrency, targetCurrency, baseAmount, exchangeRates } = this.state;
    const rate = exchangeRates[targetCurrency] / exchangeRates[baseCurrency];
    const convertedAmount = baseAmount * rate;
    this.setState({ targetAmount: convertedAmount.toFixed(2) });
};

render() {
    const { baseCurrency, targetCurrency, baseAmount, targetAmount } = this.state;

    return (
    <div>
        <div className="mainContainers">
            <div className="containers">
                <div className="currencyCoverter">
                <h2>Currency Converter</h2>
                </div>
                <div className="write-up">
                    <p>Check live rates, set rate alerts, receive notifications and more.</p>
                </div>
                <div className="currencies-and-amount">
                    <div className="pick-currency">
                        <div className="amount">
                            <p>Amount</p>
                        </div>
                        <div className="to-flex">
                        <div className="currency">
                        <select id="baseCurrency" value={baseCurrency} onChange={this.handleBaseCurrencyChange}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                        <option value="NGN">NGN</option>
                        </select>
                        </div>
                        <div className="figure-to-convert">
                            <p>{baseAmount}</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="currencies-and-amount">
                    <div className="pick-currency">
                        <div className="amount">
                            <p>Converted Amount</p>
                        </div>
                        <div className="to-flex">
                        <div className="currency">
                        <select id="baseCurrency" value={targetCurrency} onChange={this.handleTargetCurrencyChange}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                        <option value="NGN">NGN</option>
                        </select>
                        </div>
                        <div className="figure-to-convert">
                            <p>{targetAmount}</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="rows">
                    <input type="button" value={"1"} className='input-tags' onClick={this.click} />
                    <input type="button" value={"2"} className='input-tags' onClick={this.click} />
                    <input type="button" value={"3"} className='input-tags' onClick={this.click} />
                    <input type="button" value={"4"} className='input-tags' onClick={this.click} />
                    <input type="button" value={"5"} className='input-tags' onClick={this.click} />
                    <input type="button" value={"6"} className='input-tags' onClick={this.click} />
                    <input type="button" value={"7"} className='input-tags' onClick={this.click} />
                    <input type="button" value={"8"} className='input-tags' onClick={this.click} />
                    <input type="button" value={"9"} className='input-tags' onClick={this.click} />
                    <input type="button" value={"0"} className='zero' onClick={this.click} />
                </div>  
        </div>
        </div>
        
    </div>
    );
}
}

export default CurrencyConverter;
