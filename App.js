import React, { Component } from 'react';
import { Text, Alert, Button, Image, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const offersList = [{
  index: 0,
  text: 'Flat 10% instant discount on Flights to UK,Europe..',
  detail: 'Exclusively for RuPay Card Holders',
  coupon: 'COUPON: MMTRUPAY',
  tnc: 'T&C\'s Apply',
  bgGrad: ['#6e45e2', '#88d3ce'],
  image: 'https://promos.makemytrip.com/store//rupay-116x116-07062019.png',
  reference: 'INTL Flights'
},
{
  index: 1,
  text: 'Flat 10% Instant Discount on Domestic Flights',
  detail: 'Exclusively on American Express Cards',
  coupon: 'COUPON: MMTAMEX',
  tnc: 'T&C\'s Apply',
  bgGrad: ['#6e88e2', '#88ffce'],
  image: 'https://promos.makemytrip.com/images//amex-if-116x116-06062019.png',
  reference: 'DOM Flights'
},
{
  index: 2,
  text: 'Up to 30% Off* on Flights & Hotels',
  detail: 'Amazon Pay Exclusive Offer',
  tnc: 'T&C\'s Apply',
  coupon: 'COUPON: MMTAMAZON',
  bgGrad: ['#6045e2', '#F8d3ce'],
  image: 'https://promos.makemytrip.com/store//amazon-116x116-02052019.png',
  reference: 'GENERAL'
},
{
  index: 3,
  text: 'Up to INR 5,000 instant discount on INTL Flights',
  detail: 'Exclusively for HDFC Bank Credit Cards',
  coupon: 'COUPON: HDFCINT',
  tnc: 'T&C\'s Apply',
  bgGrad: ['#6e45e2', '#88d3ce'],
  image: 'https://promos.makemytrip.com/store//IF-hdfc-25032019-116x116.png',
  reference: 'INTL Flights'
},
{
  index: 4,
  text: 'Upto Rs. 1000 off on Domestic Flights',
  detail: 'Limited period Offer',
  coupon: 'COUPON: MMTFLIGHT',
  tnc: 'T&C\'s Apply',
  bgGrad: ['#6e45e2', '#88d3ce'],
  image: 'https://promos.makemytrip.com/store//new-homepage-120x120_0007_mmtflight.jpg',
  reference: 'DOM Flights'
}, {
  index: 5,
  text: 'Get up to 20% discount on INTL Ho..',
  detail: 'Limited period offer!',
  coupon: 'COUPON:MMTIHDEAL',
  tnc: 'T&C\'s Appy',
  bgGrad: ['#6e45e2', '#88d3ce'],
  image: 'https://promos.makemytrip.com/store//new-homepage-120x120_0017_bpg.jpg',
  reference: 'INTL HOTELS'
},
{
  index:6,
  text:'Flat 30% on Mastercard Credit Cards',
  detail:'Limited Period Offer',
  coupon:'COUNPON: MMTMASTER',
  tnc:'T&C\'s Apply',
  bgGard:["#6e24e2"]
}];

export default class App extends Component {

  renderImage = (image) => (
    <View key={image}>
      <Image source={{ uri: image }} />
    </View>
  );
  renderOffers = (text) => (
    <View key={text}>
      <Text style={styles.textContainer}>{text}</Text>
    </View>
  );
  renderDeatils = (detail) => (
    <View key={detail}>
      <Text style={styles.detailsContainer}>{detail}</Text>
    </View>
  );
  renderCoupons = (coupon) => (
    <View key={coupon}>
      <Text style={styles.couponContainer}>{coupon}</Text>
    </View>
  );
  renderTnc = (tnc) => (
    <View key={tnc}>
      <Text style={styles.tncContainer}>{tnc}</Text>
    </View>
  );
  renderReference = (reference) => (
    <View key={reference}>
      <Text>{reference}</Text>
    </View>
  );
  onPressButton = () => {
    Alert.alert("Check your Email for more details")
  }

  //RENDER

  render() {
    const arr = []
    offersList.forEach(element => {
      arr.push(this.getOfferView(element))
    });
    return (
      
      <ScrollView horizontal={true}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: 7, marginLeft: 10, elevation: 20 }}>Super Offers</Text>
        <View style={{
          elevation: 10,
          backgroundColor: 'cyan',
          flex: 1,
          flexDirection: 'row',
          marginTop: 60,
          marginLeft: -180,
          borderColor: 'blue',
          flex: 1,
          height: 300,
          width: 3000,
          borderRadius: 10,
        }}>
          {arr}
        </View>
      </ScrollView>
    )
  }

  getOfferView = (item) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }} key={item.index}>
        <LinearGradient
          colors={item.bgGrad}
          style={styles.container}>

          {this.renderOffers(item.text)}
          {this.renderDeatils(item.detail)}
          {this.renderCoupons(item.coupon)}
          <View style={{ flexDirection: 'column' }}>
            {this.renderTnc(item.tnc)}
            <View style={styles.buttonContainer} onPress={this.onPressButton}>
              <Button
                title="Book Now"
                color='blue'
                onPress={this.onPressButton} />
            </View>
          </View>
          </LinearGradient>
        <Text style={styles.refContainer}>{item.reference}</Text>
        <Image style={styles.imgContainer} source={{ uri: item.image }} />
      </View>
    );
  }
}

//STYLESHEET

const styles = StyleSheet.create({
  container: {
    elevation: 30,
    margin: 40,
    marginRight: 10,
    flex: 1,
    borderWidth: 2,
    borderColor: '#6A82FB',
    height: 200,
    width: 450,
    borderRadius: 10,
  },
  textContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 140,
    marginRight: 20,
    marginTop: 10
  },
  detailsContainer: {
    fontSize: 15,
    marginLeft: 140,
    marginTop: 10,
    fontWeight: 'bold'
  },

  imgContainer: {
    elevation: 30,
    width: 100,
    height: 100,
    position: 'absolute',
    marginLeft: 60,
    marginTop: 20,
    borderRadius: 10
  },

  refContainer: {
    position: 'absolute',
    marginLeft: 180,
    fontSize: 20,
    marginTop: 13,
    fontWeight: 'bold'
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: -40,
    width: 100
  },
  couponContainer: {
    marginLeft: 100,
    fontSize: 20,
    marginTop: 60
  },
  tncContainer: {
    marginLeft: 10,
    marginBottom: 10,
    marginTop: -20
  }
})