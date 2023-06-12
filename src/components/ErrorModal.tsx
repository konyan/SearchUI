import { tw } from '@core';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

interface ErrorModalProps {
  error: boolean;
  setModalVisible: (close: boolean) => void;
}

const ErrorModal = ({ error, setModalVisible }: ErrorModalProps) => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={error}
        onRequestClose={() => {
          setModalVisible(!error);
        }}
      >
        <View style={[tw`mt-40 items-center w-80 mx-auto flex p-4 bg-white`, styles.modalView]}>
          <Text style={styles.modalText} testID="txt_title">
            This user name does not exist! Please specify an existing user name!
          </Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!error)}
            testID="btn_close"
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 50,
    padding: 18,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 15,
    textAlign: 'center',
  },
});

export default ErrorModal;
