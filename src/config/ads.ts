/**
 * CENTRALNY SYSTEM ZARZĄDZANIA REKLAMAMI — Tipynatripy
 *
 * Jak aktywować reklamy:
 * 1. Ustaw ADS_ENABLED = true
 * 2. Wpisz Publisher ID z konta AdSense: AD_PUBLISHER_ID
 * 3. Dla każdego slotu ustaw enabled: true i wpisz slotId z panelu AdSense
 *
 * Sloty są renderowane przez komponent <AdSlot position="..." />
 * Jeden komponent — jedno miejsce konfiguracji.
 */

// ── Globalne przełączniki ──────────────────────────────────────────────────
export const ADS_ENABLED = false; // true = reklamy włączone globalnie
export const AD_PUBLISHER_ID = 'ca-pub-XXXXXXXXXXXXXXXX'; // Twoje Publisher ID

// ── Definicja pozycji slotów ───────────────────────────────────────────────
export type AdSlotPosition =
  | 'article-top'       // Nad treścią artykułu (pod hero image)
  | 'article-middle'    // W połowie artykułu (co ~500 słów)
  | 'article-bottom'    // Pod treścią artykułu (nad "Podobne artykuły")
  | 'blog-list-top'     // Na górze listy bloga
  | 'plany-list-top'    // Na górze listy planów
  | 'homepage-banner'   // Banner na stronie głównej
  | 'sidebar';          // Sidebar (reserved for future)

export type AdFormat = 'auto' | 'rectangle' | 'leaderboard' | 'fluid' | 'in-article';

export interface AdSlotConfig {
  slotId: string;       // ID slotu z panelu AdSense
  format: AdFormat;     // Format reklamy
  enabled: boolean;     // Aktywny (true) / nieaktywny (false)
  label?: string;       // Opis (tylko do celów developerskich)
}

// ── Konfiguracja poszczególnych slotów ────────────────────────────────────
export const adSlots: Record<AdSlotPosition, AdSlotConfig> = {
  'article-top': {
    slotId: '1111111111',
    format: 'auto',
    enabled: false,
    label: 'Artykuł — góra (pod nagłówkiem)',
  },
  'article-middle': {
    slotId: '2222222222',
    format: 'in-article',
    enabled: false,
    label: 'Artykuł — środek (in-article)',
  },
  'article-bottom': {
    slotId: '3333333333',
    format: 'auto',
    enabled: false,
    label: 'Artykuł — dół (nad sekcją podobnych)',
  },
  'blog-list-top': {
    slotId: '4444444444',
    format: 'leaderboard',
    enabled: false,
    label: 'Lista bloga — góra',
  },
  'plany-list-top': {
    slotId: '5555555555',
    format: 'leaderboard',
    enabled: false,
    label: 'Lista planów — góra',
  },
  'homepage-banner': {
    slotId: '6666666666',
    format: 'leaderboard',
    enabled: false,
    label: 'Strona główna — banner',
  },
  'sidebar': {
    slotId: '7777777777',
    format: 'rectangle',
    enabled: false,
    label: 'Sidebar (rezerwacja)',
  },
};
