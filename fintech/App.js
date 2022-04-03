import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#026554',
  };

  const [balaceActive, setBalanceActive] = useState(true);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <View style={styles.continerBox2}>
            <Text style={styles.headerText}>Hi, Sandy</Text>
            <Image
              style={styles.iconStyle}
              source={require('./assets/menu.png')}
            />
          </View>

          <View style={styles.continerBox1}>
            <View style={styles.rectengBalance}>
              <View style={styles.box1}>
                <Text style={styles.blanceText}>Balance</Text>
                <TouchableOpacity
                  onPress={() => setBalanceActive(!balaceActive)}>
                  <Image
                    style={styles.iconStyle}
                    source={
                      balaceActive
                        ? require('./assets/eye_active.png')
                        : require('./assets/eye_inactive.png')
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.box2}>
                <Text style={styles.currencyText}>SGD</Text>
                <Text>{'   '}</Text>
                <Text style={styles.blanceText2}>
                  {balaceActive ? '1,302.00' : '****'}
                </Text>
              </View>
            </View>

            <View style={styles.box3}>
              <View style={styles.boxImageFeature}>
                <Image
                  style={styles.iconFeature}
                  source={require('./assets/withdraw.png')}
                />
                <Text style={styles.textFeature}>Withdraw</Text>
              </View>

              <View style={styles.boxImageFeature}>
                <Image
                  style={styles.iconFeature}
                  source={require('./assets/send.png')}
                />
                <Text style={styles.textFeature}>Send</Text>
              </View>

              <View style={styles.boxImageFeature}>
                <Image
                  style={styles.iconFeature}
                  source={require('./assets/earn.png')}
                />
                <Text style={styles.textFeature}>Earn</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container2}>
          <View style={styles.box4}>
            <Text style={styles.boxTitle}>Services</Text>
            <View style={styles.serviceBox}>
              <View style={styles.boxImageFeature}>
                <Image
                  style={styles.iconFeatureService}
                  source={require('./assets/payslip.png')}
                />
                <Text style={styles.textFeatureService}>Payslip</Text>
              </View>

              <View style={styles.boxImageFeature}>
                <Image
                  style={styles.iconFeatureService}
                  source={require('./assets/leave.png')}
                />
                <Text style={styles.textFeatureService}>Leave</Text>
              </View>

              <View style={styles.boxImageFeature}>
                <Image
                  style={styles.iconFeatureService}
                  source={require('./assets/finance.png')}
                />
                <Text style={styles.textFeatureService}>Finance</Text>
              </View>

              <View style={styles.boxImageFeature}>
                <Image
                  style={styles.iconFeatureService}
                  source={require('./assets/other.png')}
                />
                <Text style={styles.textFeatureService}>Other</Text>
              </View>
            </View>

            <Text style={styles.boxTitle2}>Offers</Text>
            <ScrollView style={styles.boxOffers} horizontal={true}>
              <View style={styles.boxImageOffers}>
                <Image
                  style={styles.iconFeatureOffers}
                  source={require('./assets/dummy2.png')}
                />
                <Text style={styles.textFeatureOffers}>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </Text>
              </View>
              <View style={styles.boxImageOffers}>
                <Image
                  style={styles.iconFeatureOffers}
                  source={require('./assets/dummy.png')}
                />
                <Text style={styles.textFeatureOffers}>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsu...
                </Text>
              </View>
              <View style={styles.boxImageOffers}>
                <Image
                  style={styles.iconFeatureOffers}
                  source={require('./assets/dummy.png')}
                />
                <Text style={styles.textFeatureOffers}>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsu...
                </Text>
              </View>
              <View style={styles.boxImageOffers}>
                <Image
                  style={styles.iconFeatureOffers}
                  source={require('./assets/dummy.png')}
                />
                <Text style={styles.textFeatureOffers}>
                  Lorem Ipsum Lorem Ipsum Lorem Ipsu...
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: wp(100),
    height: 300,
    backgroundColor: '#026554',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
  },
  continerBox2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    transform: [{scaleX: 0.5}],
  },
  continerBox1: {
    alignItems: 'center',
    transform: [{scaleX: 0.5}],
  },
  currencyText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    opacity: 0.6,
    lineHeight: 38,
  },
  blanceText2: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  rectengBalance: {
    marginHorizontal: 10,
    width: wp(90),
    height: hp(11),
    backgroundColor: '#00725E',
    borderRadius: 12,
    paddingRight: 16,
    paddingTop: 14,
    paddingLeft: 16,
    shadowColor: '#00000029',
    shadowOffset: {
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  box3: {
    marginTop: 42,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp(100),
  },
  iconFeature: {
    width: 42,
    height: 42,
    tintColor: '#FFFFFF',
    backgroundColor: '#026554',
    marginBottom: 12,
  },
  container2: {
    marginTop: 18,
    width: wp(100),
  },
  blanceText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  boxImageFeature: {
    alignItems: 'center',
  },
  textFeature: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  highlight: {
    fontWeight: '700',
  },
  box4: {
    flexDirection: 'column',
  },
  boxTitle: {
    marginHorizontal: wp(6),
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
  boxTitle2: {
    marginTop: 25,
    marginBottom: 25,
    marginHorizontal: wp(6),
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
  serviceBox: {
    marginTop: 42,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconFeatureService: {
    width: 42,
    height: 42,
    tintColor: '#026554',
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  textFeatureService: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  boxOffers: {
    // backgroundColor: 'blue',
    paddingHorizontal: wp(4),
  },
  iconFeatureOffers: {
    width: 248,
    borderRadius: 10,
    height: 140,
  },
  boxImageOffers: {
    marginHorizontal: 10,
  },
  textFeatureOffers: {
    fontSize: 16,
    fontWeight: '500',
    width: 200,
    color: '#000000',
  },
});

export default App;
