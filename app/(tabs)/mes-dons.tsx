import { View, StyleSheet, FlatList, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * Obtention des dimensions de l'écran pour le calcul des tailles relatives
 */
const { width: LARGEUR_ECRAN } = Dimensions.get('window');

/**
 * Type définissant la structure d'un don
 */
type Don = {
  id: string;
  montant: number;
  association: string;
  date: string;
  statut: 'complété' | 'en_attente' | 'récurrent';
};

/**
 * Écran affichant l'historique des dons de l'utilisateur
 * Interface responsive avec statistiques et liste des dons
 */
export default function EcranMesDons() {
  // Exemple de données
  const historiqueDons: Don[] = [
    { id: '1', montant: 10, association: "Association Santé Pour Tous", date: "15 Jan 2024", statut: 'complété' },
    { id: '2', montant: 20, association: "Recherche Médicale France", date: "10 Jan 2024", statut: 'récurrent' },
  ];

  // Calcul des statistiques
  const totalDons = historiqueDons.reduce((acc, don) => acc + don.montant, 0);
  const nombreDons = historiqueDons.length;

  const renduDon = ({ item }: { item: Don }) => (
    <View style={styles.carteDon}>
      <View style={styles.enTeteCarte}>
        <ThemedText type="subtitle">{item.association}</ThemedText>
        <View style={[
          styles.badge,
          { backgroundColor: item.statut === 'récurrent' ? '#0a7ea4' : '#4CAF50' }
        ]}>
          <ThemedText style={styles.texteBadge}>{item.statut}</ThemedText>
        </View>
      </View>
      <View style={styles.contenuCarte}>
        <MaterialIcons name="euro" size={20} color="#666" />
        <ThemedText style={styles.montant}>{item.montant}</ThemedText>
        <ThemedText style={styles.date}>{item.date}</ThemedText>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.conteneurPrincipal}>
      <View style={styles.conteneur}>
        {/* En-tête avec statistiques */}
        <View style={styles.statistiques}>
          <View style={styles.carteStats}>
            <MaterialIcons name="account-balance" size={24} color="#0a7ea4" />
            <ThemedText style={styles.titreStats}>Total des dons</ThemedText>
            <ThemedText style={styles.valeurStats}>{totalDons}€</ThemedText>
          </View>
          <View style={styles.carteStats}>
            <MaterialIcons name="receipt-long" size={24} color="#0a7ea4" />
            <ThemedText style={styles.titreStats}>Nombre de dons</ThemedText>
            <ThemedText style={styles.valeurStats}>{nombreDons}</ThemedText>
          </View>
        </View>

        {/* Titre de la section historique */}
        <View style={styles.enteteSection}>
          <MaterialIcons name="history" size={24} color="#0a7ea4" />
          <ThemedText type="subtitle" style={styles.titreListe}>
            Historique des dons
          </ThemedText>
        </View>

        {/* Liste des dons avec padding adaptatif */}
        <FlatList
          data={historiqueDons}
          renderItem={renduDon}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.liste}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteneurPrincipal: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  conteneur: {
    flex: 1,
    paddingHorizontal: LARGEUR_ECRAN * 0.04, // 4% de la largeur de l'écran
  },
  statistiques: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    gap: LARGEUR_ECRAN * 0.02, // 2% d'espacement
  },
  carteStats: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: LARGEUR_ECRAN * 0.44, // ~44% de la largeur
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titreStats: {
    color: '#666',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  valeurStats: {
    fontSize: Math.min(24, LARGEUR_ECRAN * 0.06), // Taille adaptative
    fontWeight: 'bold',
    color: '#0a7ea4',
    marginTop: 4,
  },
  enteteSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  titreListe: {
    fontSize: 18,
  },
  liste: {
    paddingBottom: 20,
  },
  carteDon: {
    backgroundColor: '#fff',
    padding: LARGEUR_ECRAN * 0.04,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  enTeteCarte: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 80,
    alignItems: 'center',
  },
  texteBadge: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  contenuCarte: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  montant: {
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    color: '#666',
    marginLeft: 'auto',
    fontSize: 14,
  }
});
