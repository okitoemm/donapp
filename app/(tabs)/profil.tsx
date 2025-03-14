import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { MaterialIcons } from '@expo/vector-icons';

export default function EcranProfil() {
  const renderOption = (icone: keyof typeof MaterialIcons.glyphMap, titre: string, description?: string) => (
    <TouchableOpacity style={styles.option}>
      <MaterialIcons name={icone} size={24} color="#0a7ea4" />
      <View style={styles.optionTexte}>
        <ThemedText style={styles.optionTitre}>{titre}</ThemedText>
        {description && <ThemedText style={styles.optionDescription}>{description}</ThemedText>}
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.conteneur}>
      {/* En-tête profil */}
      <View style={styles.enTete}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.photo}
        />
        <ThemedText style={styles.nom}>Jean Dupont</ThemedText>
        <ThemedText style={styles.email}>jean.dupont@email.com</ThemedText>
      </View>

      {/* Section Paramètres du compte */}
      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.titreSections}>Paramètres du compte</ThemedText>
        {renderOption('person', 'Informations personnelles')}
        {renderOption('credit-card', 'Méthodes de paiement')}
        {renderOption('notifications', 'Notifications')}
      </View>

      {/* Section Préférences */}
      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.titreSections}>Préférences</ThemedText>
        {renderOption('language', 'Langue', 'Français')}
        {renderOption('dark-mode', 'Thème', 'Clair')}
      </View>

      {/* Déconnexion */}
      <TouchableOpacity style={styles.boutonDeconnexion}>
        <MaterialIcons name="logout" size={24} color="#fff" />
        <ThemedText style={styles.texteDeconnexion}>Se déconnecter</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  enTete: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  nom: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
    paddingVertical: 8,
  },
  titreSections: {
    marginLeft: 16,
    marginVertical: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionTexte: {
    flex: 1,
    marginLeft: 16,
  },
  optionTitre: {
    fontSize: 16,
  },
  optionDescription: {
    color: '#666',
    fontSize: 14,
    marginTop: 2,
  },
  boutonDeconnexion: {
    backgroundColor: '#ff4444',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texteDeconnexion: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  }
});
