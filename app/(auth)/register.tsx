import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';

/**
 * Écran d'inscription
 * Permet aux nouveaux utilisateurs de créer un compte
 */
export default function EcranInscription() {
  return (
    <View style={styles.conteneur}>
      <ThemedText type="title" style={styles.titre}>Inscription</ThemedText>
      
      <TextInput 
        style={styles.champSaisie}
        placeholder="Nom complet"
      />
      
      <TextInput 
        style={styles.champSaisie}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput 
        style={styles.champSaisie}
        placeholder="Mot de passe"
        secureTextEntry
      />

      <TextInput 
        style={styles.champSaisie}
        placeholder="Confirmer le mot de passe"
        secureTextEntry
      />

      <TouchableOpacity style={styles.bouton}>
        <ThemedText style={styles.texteBouton}>S'inscrire</ThemedText>
      </TouchableOpacity>

      <Link href="/login" style={styles.lien}>
        <ThemedText>Déjà un compte ? Se connecter</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles similaires à l'écran de connexion
  conteneur: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titre: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  champSaisie: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  bouton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  texteBouton: {
    color: 'white',
    textAlign: 'center',
  },
  lien: {
    marginTop: 15,
    alignItems: 'center',
  }
});
