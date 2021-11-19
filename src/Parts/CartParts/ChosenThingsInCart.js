import React from 'react'
import './Cart.css'
import {PlusUnitButton, MinusUnitButton, DeleteItemButtonInCart} from "./ButtonsInCart";
import {ItemPhotoSlider, ItemPriceCart, ItemTitle, ThingCounter} from "./ChosenItemDetailsInCart";
import ChosenAttribute from "./ChosenAttributeInCart";

class ChosenThingsInCart extends React.Component {


    totalBagPriceFunc = () => {
        this.props.totalBagPriceFunc({
            id: this.props.id,
            prices: this.props.prices,
            counter: this.props.counter
        })
    }

    totalBagCountFunc = () => {
        this.props.totalBagCountFunc({
            id: this.props.id,
            counter: this.props.counter
        })
    }

    changeCounter = (counter) => {
        this.props.changeCounter (this.props.id, counter)
    }


    render() {

        return (
            <div className='One-chosen-thing-in-cart'>
                <ItemTitle name={this.props.name}
                           brand={this.props.brand}/>
                <ItemPriceCart
                    currency={this.props.currency}
                    currencyName={this.props.currencyName}
                    prices={this.props.prices}
                    counter={this.props.counter}
                    changeCounter={this.changeCounter}
                />
                <div className='Attribute-container-cart'>
                    {this.props.attributes.map(({name, value}) => {
                        return <ChosenAttribute
                            name={name}
                            value={value}
                        />
                    })}
                </div>



                <PlusUnitButton
                    changeCounter={this.changeCounter}
                    counter={this.props.counter}
                    totalBagPriceFunc={this.totalBagPriceFunc}
                    totalBagCountFunc={this.totalBagCountFunc}
                />

                <ThingCounter
                    counter={this.props.counter}
                />

                <MinusUnitButton
                    changeCounter={this.changeCounter}
                    counter={this.props.counter}
                    totalBagPriceFunc={this.totalBagPriceFunc}
                    totalBagCountFunc={this.totalBagCountFunc}
                />

                <DeleteItemButtonInCart
                    chosenRemoveItemsFunc={this.props.chosenRemoveItemsFunc}
                    id={this.props.id}
                />

                <ItemPhotoSlider pics={this.props.pics}/>
            </div>
        )
    }
}

export default ChosenThingsInCart