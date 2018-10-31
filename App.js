import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup:{
    normal:{
      maxWidth: 320,
      width: 200,
    }
  },
  textbox: {
    normal:{
      borderWidth: 0
    }
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {

    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    }

  },
  stylesheet: formStyles,
};

export default class App extends React.Component {
  handleSubmit = () => {
    // do the things
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {
    console.log(formStyles.formGroup );
    return (
      <View style={styles.container}>
        <Text>Hola !</Text>
        <Form
            ref={c => this._form = c} // assign a ref
            type={User}
            options={options}
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{
    width: '80'
  }
});
