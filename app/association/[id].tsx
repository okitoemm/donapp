import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * Page de détail d'une association
 * Affiche les informations détaillées d'une association sélectionnée
 */
export default function DetailAssociation() {
  const { id } = useLocalSearchParams();
  const { width: LARGEUR_ECRAN } = Dimensions.get('window');

  const ouvrirSiteWeb = () => {
    Linking.openURL('https://example.com');
  };

  return (
    <View style={styles.conteneurPrincipal}>
      {/* Bouton de retour */}
      <TouchableOpacity 
        style={styles.boutonRetour}
        onPress={() => router.back()}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView style={styles.conteneur}>
        <Image 
          source={{ uri: 'https://example.com/banner.jpg' }}
          style={styles.banniere}
        />
        
        <View style={styles.contenu}>
          {/* Logo et titre */}
          <View style={styles.enTete}>
            <Image 
              source={{ uri: 'https://example.com/logo.png' }}
              style={styles.logo}
            />
            <View style={styles.infosTitre}>
              <ThemedText type="title">Association Santé Pour Tous</ThemedText>
              <View style={styles.badge}>
                <ThemedText style={styles.badgeTexte}>Certifiée</ThemedText>
              </View>
            </View>
          </View>

          {/* Résumé rapide */}
          <View style={styles.resumeRapide}>
            <View style={styles.infoItem}>
              <MaterialIcons name="location-on" size={20} color="#666" />
              <ThemedText>Paris, France</ThemedText>
            </View>
            <View style={styles.infoItem}>
              <MaterialIcons name="calendar-today" size={20} color="#666" />
              <ThemedText>Créée en 2010</ThemedText>
            </View>
          </View>

          <ThemedText style={styles.description}>
            Description détaillée de l'association et de ses missions...
          </ThemedText>
          
          {/* Objectifs */}
          <View style={styles.section}>
            <ThemedText type="subtitle">Nos objectifs</ThemedText>
            <View style={styles.objectifs}>
              {['Aide médicale', 'Recherche', 'Prévention'].map((objectif) => (
                <View key={objectif} style={styles.objectifItem}>
                  <MaterialIcons name="check-circle" size={24} color="#4CAF50" />
                  <ThemedText style={styles.objectifTexte}>{objectif}</ThemedText>
                </View>
              ))}
            </View>
          </View>

          {/* Statistiques étendues */}
          <View style={styles.section}>
            <ThemedText type="subtitle">Impact</ThemedText>
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <ThemedText style={styles.statNombre}>150</ThemedText>
                <ThemedText style={styles.statLabel}>Donateurs</ThemedText>
              </View>
              <View style={styles.statCard}>
                <ThemedText style={styles.statNombre}>15000€</ThemedText>
                <ThemedText style={styles.statLabel}>Collectés</ThemedText>
              </View>
              <View style={styles.statCard}>
                <ThemedText style={styles.statNombre}>45</ThemedText>
                <ThemedText style={styles.statLabel}>Projets</ThemedText>
              </View>
              <View style={styles.statCard}>
                <ThemedText style={styles.statNombre}>1200</ThemedText>
                <ThemedText style={styles.statLabel}>Bénéficiaires</ThemedText>
              </View>
            </View>
          </View>

          {/* Documents et transparence */}
          <View style={styles.section}>
            <ThemedText type="subtitle">Transparence</ThemedText>
            <TouchableOpacity style={styles.documentItem}>
              <MaterialIcons name="description" size={24} color="#0a7ea4" />
              <ThemedText style={styles.documentTexte}>Rapport annuel 2023</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.documentItem}>
              <MaterialIcons name="euro" size={24} color="#0a7ea4" />
              <ThemedText style={styles.documentTexte}>Bilan financier</ThemedText>
            </TouchableOpacity>
          </View>

          {/* Contact et liens */}
          <View style={styles.section}>
            <ThemedText type="subtitle">Contact</ThemedText>
            <TouchableOpacity style={styles.contactItem} onPress={ouvrirSiteWeb}>
              <MaterialIcons name="language" size={24} color="#0a7ea4" />
              <ThemedText style={styles.lienTexte}>Visiter le site web</ThemedText>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.boutonDon}>
            <MaterialIcons name="favorite" size={24} color="#fff" />
            <ThemedText style={styles.texteBouton}>Faire un don</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteneurPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boutonRetour: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  conteneur: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banniere: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contenu: {
    padding: 20,
  },
  description: {
    marginVertical: 16,
    lineHeight: 24,
  },
  statistiques: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a7ea4',
  },
  statLabel: {
    color: '#666',
  },
  texteBouton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  enTete: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  infosTitre: {
    flex: 1,
  },
  badge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  badgeTexte: {
    color: '#fff',
    fontSize: 12,
  },
  resumeRapide: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  section: {
    marginVertical: 20,
  },
  objectifs: {
    marginTop: 10,
    gap: 12,
  },
  objectifItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  objectifTexte: {
    fontSize: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  statCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginTop: 10,
    gap: 10,
  },
  documentTexte: {
    color: '#0a7ea4',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  lienTexte: {
    color: '#0a7ea4',
    textDecorationLine: 'underline',
  },
  boutonDon: {
    backgroundColor: '#0a7ea4',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 30,
  }
});
