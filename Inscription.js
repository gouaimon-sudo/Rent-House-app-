import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { supabase } from './Inscription'; // Vraie page supabas.js a créer pour la connexion à Supabase après

export default function Inscription() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: 'http://localhost:3000', // Remplacez par l'URL de redirection appropriée
        },
      });

      if (error) {
        console.error('Erreur lors de l\'inscription:', error.message);
      } else {
        console.log('Inscription réussie !');
        // Redirection vers une autre page ou une autre action après l\'inscription
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Inscription</Text>
      <TextInput
        placeholder="Adresse mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={styles.boutonPrincipal} onPress={handleRegister}>
        <Text style={styles.texteBouton}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titre: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  boutonPrincipal: {
    backgroundColor: '#4ca9f0',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 5,
  },
  texteBouton: {
    color: '#fff',
    textAlign: 'center',
  },
});