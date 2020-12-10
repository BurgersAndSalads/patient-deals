import React, { Component } from 'react';

export default class CollectionEdit extends Component {
    constructor(props) {
        super(props);

        this.onChangeGameDetails = this.onChangeGameDetails.bind(this);
        this.onChangeGameName = this.onChangeGameName.bind(this);
        this.onChangeGamePrice = this.onChangeGamePrice.bind(this);
        this.onChangeDealExpire = this.onChangeDealExpire.bind(this);
        this.onChangeChecked = this.onChangeChecked.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            gameName: '',
            gameDetails: '',
            gamePrice: '',
            dealExpire: '',
            checkMark: false,
        }
    }

    onChangeGameName(e) {
        this.setState({
            gameName: e.target.value
        });
    }

    onChangeGameDetails(e) {
        this.setState({
            gameDetails: e.target.value
        });
    }

    onChangeGamePrice(e) {
        this.setState({
            gamePrice: e.target.value
        });
    }
    
    onChangeDealExpire(e) {
        this.setState({
            dealExpire: e.target.value
        });
    }

    onChangeChecked(e) {
        this.setState({
            checkMark: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`Form submitted:`);
        console.log(`Game Name: ${this.state.gameName}`);
        console.log(`Game Details: ${this.state.gameDetails}`);
        console.log(`Game Price: ${this.state.gamePrice}`);
        console.log(`Price Expiry: ${this.state.dealExpire}`);
        console.log(`Added to Wish List: ${this.state.checkMark}`)
        
        const newCollection = {
            gameName: this.state.gameName,
            gameDetails: this.state.gameDetails,
            gamePrice: this.state.gamePrice,
            dealExpire: this.state.dealExpire,
            checkMark: this.state.checkMark,
        }

        this.setState({
            gameName: '',
            gameDetails: '',
            gamePrice: '',
            dealExpire: '',
            checkMark: false,
        })
    }

    render () {
        return (
            <div>
                <h3>Create a Collection</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Game Name: </label>
                        <input type="text" className="form-control" value={this.state.gameName} onChange={this.onChangeGameName} />
                    </div>
                    <div className="form-group">
                        <label>Game Details: </label>
                        <input type="text" className="form-control" value={this.state.gameDetails} onChange={this.onChangeGameDetails} />
                    </div>
                    <div className="form-group">
                        <label>Game Price: </label>
                        <input type="text" className="form-control" value={this.state.gamePrice} onChange={this.onChangeGamePrice} />
                    </div>
                    <div className="form-group">
                        <label>Deal Expiry: </label>
                        <input type="text" className="form-control" value={this.state.dealExpire} onChange={this.onChangeDealExpire} />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" name="addWishList" id="added" value="true" checked={this.state.checkMark==='true'} onChange={this.onChangeChecked} />
                            <label className="form-check-label">Added</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}