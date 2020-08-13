import React, { Component } from 'react';
import { View, SafeAreaView, StatusBar, Text, TouchableOpacity, TextInput } from 'react-native';
import { appColor, HeaderHeigth, blackColor, newColour, BlueColor, ratio, fontGrey, fontLight, appYellow, width, height } from '../constent';
import { Styles } from '../Styles';
import { connect } from 'react-redux'
import { fetchsavedata, fetchData } from '../redux/actions'
import SimpleToast from 'react-native-simple-toast';
//import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

class Addcurrency extends Component {

    state = {

        localdata: [],
        length: '',
        cryptoname: 'Bitcoin',
        obj: {},
        search: '',
    }

    async UNSAFE_componentWillMount() {


        let url = "https://data.messari.io/api/v1/assets"
        let responce = await axios.get(url);
        let json = await responce.data
        let data = json
        console.log('student login data', json)
        await this.props.fetchData(data)

        let val = []

        val = await this.props.Data.data.slice(0, this.props.Data.data.length).map(ele => {
            let obj = {}
            obj.name = ele.name
            obj.symbol = ele.symbol
            obj.price_usd = ele.metrics.market_data.price_usd
            obj.percentage = ele.metrics.market_data.percent_change_usd_last_24_hours
            return obj
        })
        this.setState({ localdata: val })
    }
    _Addcryptocurrency = async () => {

        let searchResult = ''
        if (this.state.search == '') {
            SimpleToast.show('Enter the currency name')
            return;
        }
        else {
            searchResult = this.state.localdata.find(el => el.name == this.state.search)

            // checks if given key is available
            if (!searchResult) {
                SimpleToast.show('Invalid keyword');
                return;
            }
            const isElementAvailable  = this.props.SavedData.data.find(el => el.name == this.state.search)
            if (isElementAvailable) {
                SimpleToast.show('Currency already exists');
                return;
            }
            let data = searchResult
            this.state.localdata == '' ? SimpleToast.show('server error') : this.props.fetchsavedata(data) && this.props.navigation.navigate('Dashboard')
        }
    }
    render() {

        console.log('adddata', this.props);
        console.log('adddata', this.state);

        return (
            <View>
                <SafeAreaView style={{ backgroundColor: newColour }}>
                    <StatusBar backgroundColor={appColor} barStyle="light-content" />
                    <View style={{ flexDirection: 'row', height: HeaderHeigth, alignItems: 'center' }}>
                        <View></View>
                        <View style={{ flex: 1 }}>

                            <Text style={[Styles.H3, { marginStart: 50 * ratio }]}
                                onPress={() => this.props.navigation.goBack(null)}
                            >{"<< Back to list"}</Text>

                        </View>
                    </View>
                </SafeAreaView>

                <View style={{ marginTop: 180 * ratio }}>
                    <Text style={[Styles.H7, { marginStart: 30 * ratio }]}>
                        Add a CrypotoCurreny
                </Text>

                    <TextInput
                        style={{ borderWidth: 1, borderColor: fontLight, marginHorizontal: 30 * ratio, borderRadius: 5 * ratio, marginTop: 40 * ratio }}
                        placeholder='Use a name or ticket symbol'

                        onChangeText={(text) => this.setState({ search: text })}
                        value={this.state.search}>

                    </TextInput>
                    <View style={{ alignItems: 'flex-end', marginEnd: 30 * ratio }}>
                        <TouchableOpacity style={{ padding: 5, borderWidth: 1, backgroundColor: appYellow, width: width / 3, height: height / 15, alignItems: "center", marginVertical: 10, borderRadius: 5 * ratio }}

                            onPress={() => this._Addcryptocurrency()} >

                            <Text style={{ marginTop: 10 * ratio }}  >ADD</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}


const mapStateToProps = state => {

    return {
        Data: state.Datadash,
        SavedData:state.SaveData


    }
}
export default connect(mapStateToProps, { fetchsavedata, fetchData })(Addcurrency);