export class Applicatie {
          id: String;
          achternaam: String;
          voornaam: String;
          email: String;
          straatnaam: String;
          huisnummer: String;
          bus: String;
          gemeente: String;
          postcode: String;
          geboorteDatum: Date;
          geboortePlaats: String;
          nationaliteit: String;
          paspoortNummer: String;
          telefoonNummer: String;
          telefoonnummerNood: String;
          voornaamNood: String;
          achternaamNood: String;
          emailNood: String;
          relatieNood: String;
          allergie: String;
          medischeAandoening: String;
          opleiding: String;
          ervaringVrijwillger: String;
          spaansNiveau: String;
          takenVrijwilliger: String;
          verwachtingenVrijwilliger: String;
          voorstellen: String;
          huidigeStap: Number;
          reispaspoortNaam: String;
          attestNaam: String;
          diplomaNaam: String;
          periodeStageVan: Date;
          periodeStageTot: Date;
          periodeVerblijfVan: Date;
          periodeVerblijfTot: Date;
          aantalWekenSpaans: String;
          periodeBevestigd: boolean;
          welkeWeg: String;
          motivatie: String;
          vragen: String;

          static fromJSON(json: any): Applicatie {
                    var item = new Applicatie();
                    item.id = json.id;
                    item.reispaspoortNaam = json.reispaspoortNaam;
                    item.attestNaam = json.attestNaam;
                    item.diplomaNaam = json.diplomaNaam;
                    item.achternaam = json.achternaam;
                    item.voornaam = json.voornaam;
                    item.email = json.email;
                    item.straatnaam = json.straatnaam;
                    item.huisnummer = json.huisnummer;
                    item.bus = json.bus;
                    item.gemeente = json.gemeente;
                    item.postcode = json.postcode;
                    item.geboorteDatum = json.geboorteDatum == null ? null : new Date(json.geboorteDatum);
                    item.geboortePlaats = json.geboortePlaats;
                    item.nationaliteit = json.nationaliteit;
                    item.paspoortNummer = json.paspoortNummer;
                    item.telefoonNummer = json.telefoonNummer;
                    item.telefoonnummerNood = json.telefoonnummerNood;
                    item.voornaamNood = json.voornaamNood;
                    item.achternaamNood = json.achternaamNood;
                    item.emailNood = json.emailNood;
                    item.relatieNood = json.relatieNood;
                    item.allergie = json.allergie;
                    item.medischeAandoening = json.medischeAandoening;
                    item.opleiding = json.opleiding;
                    item.ervaringVrijwillger = json.ervaringVrijwillger;
                    item.spaansNiveau = json.spaansNiveau;
                    item.takenVrijwilliger = json.takenVrijwilliger;
                    item.verwachtingenVrijwilliger = json.verwachtingenVrijwilliger;
                    item.voorstellen = json.voorstellen;
                    item.huidigeStap = json.huidigeStap;
                    item.periodeStageVan = json.periodeStageVan == null ? null : new Date(json.periodeStageVan);
                    item.periodeStageTot = json.periodeStageTot == null ? null : new Date(json.periodeStageTot);
                    item.periodeVerblijfVan = json.periodeVerblijfVan == null ? null : new Date(json.periodeVerblijfVan);
                    item.periodeVerblijfTot = json.periodeVerblijfTot == null ? null : new Date(json.periodeVerblijfTot);
                    item.aantalWekenSpaans = json.aantalWekenSpaans;
                    item.periodeBevestigd = json.periodeBevestigd;
                    item.welkeWeg = json.welkeWeg;
                    item.vragen = json.vragen;
                    item.motivatie = json.motivatie;
                    return item;
          }
}
