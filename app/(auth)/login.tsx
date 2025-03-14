import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';

/**
 * Écran de connexion
 * Permet aux utilisateurs de se connecter avec leur email et mot de passe
 * @returns JSX.Element
 */
export default function EcranConnexion() {
  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.titre}>Connexion</ThemedText>
      
      {/* Champ de saisie email */}
      <TextInput 
        style={styles.champSaisie}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      {/* Champ de saisie mot de passe */}
      <TextInput 
        style={styles.champSaisie}
        placeholder="Mot de passe"
        secureTextEntry
      />

      {/* Bouton de connexion */}
      <TouchableOpacity style={styles.bouton}>
        <ThemedText style={styles.texteBouton}>Se connecter</ThemedText>
      </TouchableOpacity>

      {/* Lien vers l'inscription */}
      <Link href="/register" style={styles.lien}>
        <ThemedText>Pas encore de compte ? S'inscrire</ThemedText>
      </Link>
    </View>
  );
}

// Styles de l'écran de connexion
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titre: {
    marginBottom: 30,
    textAlign: 'center',
  },
  champSaisie: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  bouton: {
    backgroundColor: '#0a7ea4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  texteBouton: {
    color: '#fff',
    fontWeight: '600',
  },
  lien: {
    marginTop: 20,
    alignSelf: 'center',
  }
});
