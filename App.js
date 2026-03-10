import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text, View, TextInput,
  TouchableOpacity,
  ScrollView, 
  KeyboardAvoidingView, 
  Platform  } from 'react-native';

export default function App() {
  return (
    <View style={styles.contenu}>
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titre}>Rent House App</Text>
        <Text style={styles.sousTitre}>Bienvenue sur notre application de location de maisons !</Text>

        <TextInput 
          placeholder="Adresse mail ou Numéro" 
          style={styles.input} 
        />
        
        <TextInput 
          placeholder="Mot de passe" 
          secureTextEntry={true} 
          style={styles.input} 
        />

        <TouchableOpacity style={styles.boutonOublie}>
          <Text style={styles.texteOublie}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boutonPrincipal}>
          <Text style={styles.texteBouton}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boutonSecondaire}>
          <Text style={[styles.texteBouton, { color: '#4ca9f0' }]}>Créer un compte</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  </View>
  );
}

const styles = StyleSheet.create({
  contenu :{
    flex: 1, 
    backgroundColor: '#dee7ea',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 50, // Pour ne pas coller en haut
    paddingBottom: 40,
    justifyContent: 'center',
  },
    boutonPrincipal: {
    backgroundColor: '#4ca9f0',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // Ombre pour iOS
    shadowColor: '#4ca9f0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // Ombre pour Android
    elevation: 5,
  },
  boutonSecondaire: {
    backgroundColor: 'transparent',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4ca9f0',
    marginTop: 15,
  },
  texteBouton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  boutonOublie: {
    alignSelf: 'flex-end',
    paddingVertical: 15,
  },
  texteOublie: {
    color: '#747d8c',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  titre:{
    textAlign: 'center',
    marginTop: 5,  
    color: '#4ca9f0',
    fontWeight: '600',
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
  height: 55,
  backgroundColor: '#f1f3f5', 
  borderRadius: 12, 
  paddingHorizontal: 20,   
  fontSize: 16,
  color: '#333',
  marginBottom: 15,      
  borderWidth: 1,
  borderColor: '#e9ecef',  
},
scrollContainer: {
    paddingHorizontal: 25,
    paddingBottom: 40,
    flexGrow: 1,    
    justifyContent: 'center',
  },
  sousTitre: {
    textAlign: 'center',
    color: '#636e72',
    marginBottom: 30,
    fontSize: 15,
  }
});