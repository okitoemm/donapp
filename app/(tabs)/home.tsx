import { View, StyleSheet, FlatList, TextInput, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { CarteAssociation } from '@/components/associations/AssociationCard';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Association } from '@/src/types';

/**
 * Obtention des dimensions de l'écran
 */
const { width: SCREEN_WIDTH } = Dimensions.get('window');

/**
 * Écran d'accueil principal de l'application
 * Permet de rechercher et filtrer les associations de santé
 */
export default function EcranAccueil() {
  const [recherche, setRecherche] = useState('');
  const [categorieActive, setCategorieActive] = useState('Tout');

  // Données de test (à remplacer par l'API)
  const categories = ['Tout', 'Hôpitaux', 'Recherche', 'Enfants', 'Handicap'];
  const associations: Association[] = [
    {
      id: '1',
      nom: 'Association Santé Pour Tous',
      description: 'Aide médicale et soutien aux personnes défavorisées',
      urlLogo: 'https://example.com/logo1.png',
      categorie: 'Hôpitaux'
    },
    {
      id: '2',
      nom: 'Recherche Médicale France',
      description: 'Financement de la recherche contre les maladies rares',
      urlLogo: 'https://example.com/logo2.png',
      categorie: 'Recherche'
    }
  ];

  // Filtrage des associations
  const associationsFiltrees = associations.filter(asso => {
    const matchRecherche = asso.nom.toLowerCase().includes(recherche.toLowerCase());
    const matchCategorie = categorieActive === 'Tout' || asso.categorie === categorieActive;
    return matchRecherche && matchCategorie;
  });

  return (
    <SafeAreaView style={styles.conteneur}>
      <View style={styles.header}>
        {/* Barre de recherche */}
        <View style={styles.barreRecherche}>
          <MaterialIcons name="search" size={24} color="#666" />
          <TextInput
            style={styles.champRecherche}
            placeholder="Rechercher une association..."
            value={recherche}
            onChangeText={setRecherche}
          />
        </View>

        {/* Liste horizontale des catégories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContentContainer}>
          {categories.map((categorie) => (
            <TouchableOpacity
              key={categorie}
              style={[
                styles.boutonCategorie,
                categorieActive === categorie && styles.boutonCategorieActif
              ]}
              onPress={() => setCategorieActive(categorie)}>
              <ThemedText style={[
                styles.texteCategorie,
                categorieActive === categorie && styles.texteCategorieActif
              ]}>
                {categorie}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Liste des associations */}
      <FlatList
        data={associationsFiltrees}
        renderItem={({ item }) => (
          <CarteAssociation
            id={item.id}
            nom={item.nom}
            description={item.description}
            urlLogo={item.urlLogo}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listeAssociations}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  barreRecherche: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: SCREEN_WIDTH * 0.04, // 4% de la largeur de l'écran
    marginVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    height: 46,
  },
  champRecherche: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 8,
    fontSize: 16,
  },
  categoriesContainer: {
    maxHeight: 50,
  },
  categoriesContentContainer: {
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    paddingBottom: 10,
  },
  boutonCategorie: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    minWidth: SCREEN_WIDTH * 0.2, // 20% de la largeur de l'écran
    alignItems: 'center',
  },
  boutonCategorieActif: {
    backgroundColor: '#0a7ea4',
  },
  texteCategorie: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
  texteCategorieActif: {
    color: '#fff',
  },
  listeAssociations: {
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    paddingTop: 16,
    paddingBottom: 20,
  }
});
