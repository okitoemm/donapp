import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';

/**
 * Interface définissant les propriétés d'une carte d'association
 */
interface PropsCarteAssociation {
  id: string; // Ajout de l'id
  nom: string;
  description: string;
  urlLogo: string;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

/**
 * Composant CarteAssociation
 * Affiche les informations d'une association dans une carte
 * @param props PropsCarteAssociation
 * @returns JSX.Element
 */
export function CarteAssociation({ id, nom, description, urlLogo }: PropsCarteAssociation) {
  const naviguerVersDetail = () => {
    router.push(`/association/${id}`);
  };

  return (
    <TouchableOpacity style={styles.carte} onPress={naviguerVersDetail}>
      <Image source={{ uri: urlLogo }} style={styles.logo} />
      <View style={styles.contenu}>
        <ThemedText type="subtitle">{nom}</ThemedText>
        <ThemedText>{description}</ThemedText>
      </View>
    </TouchableOpacity>
  );
}

// Styles du composant
const styles = StyleSheet.create({
  carte: {
    flexDirection: 'row',
    padding: SCREEN_WIDTH * 0.04,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
    width: '100%',
  },
  logo: {
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_WIDTH * 0.15,
    borderRadius: (SCREEN_WIDTH * 0.15) / 2,
    marginRight: SCREEN_WIDTH * 0.03,
  },
  contenu: {
    flex: 1,
    justifyContent: 'center',
  },
});
