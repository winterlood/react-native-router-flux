import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {MessageBarManager} from 'react-native-message-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

class Launch extends React.Component {
  render() {
    return (
      <View {...this.props} style={styles.container}>
        <Text>온리엘 테스트입니다.</Text>
        <Text>react-native-router-flux</Text>
        <Button
          title="관리자 모드로 가기"
          onPress={() =>
            Actions.login({data: 'Custom data', title: 'Custom title'})
          }
        />
        <Button title="트레이너 모드로 가기" onPress={Actions.register} />
        <Button title="에러메세지" onPress={Actions.error} />
        <Button
          title="모달예제"
          onPress={() => Actions.demo_lightbox({data: 'passed data'})}
        />
        <Button
          title="회원 모드로 가기"
          onPress={() => Actions.customNavBar()}
        />
        <Button
          title="경고창"
          onPress={() =>
            MessageBarManager.showAlert({
              title: '경고창 제목',
              message: '이새끼 뭐야?',
              alertType: 'success',
              // See Properties section for full customization
              // Or check `index.ios.js` or `index.android.js` for a complete example
            })
          }
        />
        <Button title="탭바" onPress={Actions.drawer} />
      </View>
    );
  }
}

export default Launch;
