import { View, StyleSheet, TouchableOpacity, ScrollView, TextInput, Dimensions, Switch } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const { width: LARGEUR_ECRAN } = Dimensions.get('window');

/**
 * Écran de don
 * Permet aux utilisateurs de faire un don avec différentes options
 * @returns JSX.Element
 */
export default function EcranDon() {
  // États locaux
  const [montantSelectionne, setMontantSelectionne] = useState<number | null>(null);
  const [montantPersonnalise, setMontantPersonnalise] = useState('');
  const [donRecurrent, setDonRecurrent] = useState(false);
  const [frequence, setFrequence] = useState('mensuel');

  // Montants prédéfinis pour les dons
  const montantsPredefinis = [5, 10, 20, 50, 100];

  // Calcul du montant final
  const montantFinal = montantSelectionne || Number(montantPersonnalise) || 0;

  return (
    <ScrollView style={styles.conteneur}>
      {/* En-tête */}
      <View style={styles.enTete}>
        <MaterialIcons name="favorite" size={32} color="#0a7ea4" />
        <ThemedText type="title" style={styles.titre}>Faire un don</ThemedText>
      </View>

      {/* Section des montants prédéfinis */}
      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.sousTitre}>
          Choisissez un montant
        </ThemedText>
        <View style={styles.grilleMontants}>
          {montantsPredefinis.map((montant) => (
            <TouchableOpacity 
              key={montant} 
              style={[
                styles.boutonMontant,
                montantSelectionne === montant && styles.boutonMontantActif
              ]}
              onPress={() => {
                setMontantSelectionne(montant);
                setMontantPersonnalise('');
              }}>
              <ThemedText style={[
                styles.texteMontant,
                montantSelectionne === montant && styles.texteMontantActif
              ]}>{montant}€</ThemedText>
            </TouchableOpacity>
          ))}
        </View>

        {/* Montant personnalisé */}
        <View style={styles.champPersonnalise}>
          <ThemedText>Montant personnalisé</ThemedText>
          <TextInput
            style={styles.inputMontant}
            keyboardType="numeric"
            value={montantPersonnalise}
            onChangeText={(texte) => {
              setMontantPersonnalise(texte);
              setMontantSelectionne(null);
            }}
            placeholder="0€"
          />
        </View>
      </View>

      {/* Options de don récurrent */}
      <View style={styles.section}>
        <View style={styles.optionRecurrent}>
          <ThemedText>Don récurrent</ThemedText>
          <Switch
            value={donRecurrent}
            onValueChange={setDonRecurrent}
            trackColor={{ false: '#767577', true: '#0a7ea4' }}
          />
        </View>

        {donRecurrent && (
          <View style={styles.frequences}>
            {['mensuel', 'trimestriel', 'annuel'].map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.boutonFrequence,
                  frequence === option && styles.boutonFrequenceActif
                ]}
                onPress={() => setFrequence(option)}>
                <ThemedText style={[
                  styles.texteFrequence,
                  frequence === option && styles.texteFrequenceActif
                ]}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Résumé et validation */}
      <View style={styles.resume}>
        <ThemedText type="subtitle">Total du don : {montantFinal}€</ThemedText>
        {donRecurrent && (
          <ThemedText style={styles.texteResume}>
            Paiement {frequence} de {montantFinal}€
          </ThemedText>
        )}
      </View>

      <TouchableOpacity 
        style={[styles.boutonValider, !montantFinal && styles.boutonDesactive]}
        disabled={!montantFinal}>
        <ThemedText style={styles.texteValider}>
          Valider le don
        </ThemedText>
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
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  titre: {
    marginTop: 10,
    color: '#0a7ea4',
  },
  section: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sousTitre: {
    marginBottom: 15,
  },
  grilleMontants: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  boutonMontant: {
    width: (LARGEUR_ECRAN - 80) / 3,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  boutonMontantActif: {
    backgroundColor: '#0a7ea4',
  },
  texteMontant: {
    fontSize: 18,
    fontWeight: '600',
  },
  texteMontantActif: {
    color: '#fff',
  },
  champPersonnalise: {
    marginTop: 20,
  },
  inputMontant: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    fontSize: 16,
  },
  optionRecurrent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  frequences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  boutonFrequence: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  boutonFrequenceActif: {
    backgroundColor: '#0a7ea4',
  },
  texteFrequence: {
    fontSize: 14,
  },
  texteFrequenceActif: {
    color: '#fff',
  },
  resume: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
  },
  texteResume: {
    marginTop: 5,
    color: '#666',
  },
  boutonValider: {
    backgroundColor: '#0a7ea4',
    margin: 10,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  boutonDesactive: {
    backgroundColor: '#ccc',
  },
  texteValider: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
