// EBSSD Kurztest 3 (HS19) + Kurztest 4 (FS16)
// Each question has 3 options. The original "keine Antwort" placeholder
// (option 4 in the test) was stripped — it's never the right answer.
// `correctIndex` is 0-based into `options`.

export interface Question {
  id: string
  question: string
  options: string[]
  correctIndex: number
}

export const questions: Question[] = [
  // ===== Kurztest 3 (HS19) =====
  {
    id: 'hs19-01',
    question:
        'Der Build Prozess des Java-basierten Teils einer Android App wird bei Android Studio gesteuert durch das Programm ...',
    options: ['gradle', 'make', 'cmake'],
    correctIndex: 0
  },
  {
    id: 'hs19-02',
    question: 'Mit einem Objekt der folgenden Klasse kann auf Systemereignisse reagiert werden:',
    options: ['BroadcastReceiver', 'ContentProvider', 'Service'],
    correctIndex: 0
  },
  {
    id: 'hs19-03',
    question: 'Mit dem "Native Development Kit" (NDK) lassen sich ...',
    options: [
      'nur native Programme (ausgeführt in eigenem Prozess) realisieren (jedoch keine Shared Libraries)',
      'sowohl native Shared Libraries wie auch nativ eigenständig ausführbare Programme (ausgeführt in einem separaten Prozess) realisieren',
      'nur native Shared Libraries realisieren (jedoch keine nativ ausführbare Programme)'
    ],
    correctIndex: 1
  },
  {
    id: 'hs19-04',
    question: 'JNI Code (Java Native Interface Code) läuft ...',
    options: [
      'zwar im selben Prozess jedoch in einem anderen Thread wie die App',
      'in einem anderen Prozess und folglich auch einem anderen Thread wie die App',
      'im selben Thread und im selben Prozess wie die App'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-05',
    question: 'Welcher Socket Systemcall blockiert (bis die Verbindung aufgebaut ist)?',
    options: ['bind()', 'accept()', 'listen()'],
    correctIndex: 1
  },
  {
    id: 'hs19-06',
    question: 'Wer ist betreffend der Android Weiterentwicklung Entscheidungsträger?',
    options: [
      'Google (alleine)',
      'nebst Google wenige ausgewählte Mitglieder der "Open Handset Alliance"',
      'alle Mitglieder der OHA (Dachorganisation "Open Handset Alliance")'
    ],
    correctIndex: 0
  },
  {
    id: 'hs19-07',
    question: 'SELinux ist eine ...',
    options: [
      '"aufgezwungene" d.h. im laufenden System nicht beeinflussbare Zugriffskontrolle',
      '"ermessensfrei" vom jeweiligen Prozess beeinflussbare Zugriffskontrolle',
      'Zugriffskontrolle, welche insbesondere die "File Permissions" (rwx) auf den Dateien berücksichtigt'
    ],
    correctIndex: 0
  },
  {
    id: 'hs19-08',
    question:
        'Wo und zu welchem Zeitpunkt wird bei aktuellen Android Versionen der Maschinencode einer Java-basierten App generiert?',
    options: [
      'Auf dem Gerät während der Ausführung der App (Just-in-Time)',
      'In Android Studio beim Build-Zeitpunkt',
      'Auf dem Gerät vorwiegend zwischen Installation und Start der App (Ahead-of-Time)'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-09',
    question: 'Das Android Framework ist vorwiegend ...',
    options: [
      'Closed Source',
      'Open Source mit Copy-Left (bevorzugt GPL)',
      'Open Source ohne Copy-Left (bevorzugt Apache License)'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-10',
    question: 'Das AOSP (Android Open Source Projekt) benötigt man ...',
    options: [
      'um das APK (Package) einer App herzustellen',
      'um das Android Framework für ein neues Gerät zu "customizen" (resp. ein Android Firmware Image herzustellen)',
      'um Native (JNI) Libraries zu kompilieren'
    ],
    correctIndex: 1
  },
  {
    id: 'hs19-11',
    question:
        'Die Behandlung einer TCP-Connection (nach erfolgtem Verbindungsaufbau) in einem separaten Prozess ...',
    options: [
      'ist durch fork() möglich',
      'erfolgt immer automatisch in einem separaten Prozess',
      'ist durch pthread_create() möglich'
    ],
    correctIndex: 0
  },
  {
    id: 'hs19-12',
    question: 'Activities, Services und Broadcast Receivers ein und derselben App laufen standardmässig ...',
    options: [
      'in unterschiedlichen Prozessen (und demzufolge auch in unterschiedlichen Threads)',
      'zwar im gleichen Prozess, jedoch in unterschiedlichen Threads',
      'im gleichen Thread (und damit auch im gleichen Prozess)'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-13',
    question: 'Eine TCP/IP-Verbindung ist ...',
    options: ['state-less', 'connection-oriented', 'connection-less'],
    correctIndex: 1
  },
  {
    id: 'hs19-14',
    question: 'Die Layers des Android-OS sind von oben nach unten in folgender Reihenfolge gegliedert:',
    options: [
      'Apps → Libraries & Runtime → Android Framework → Linux Kernel',
      'Apps → Linux Kernel → Android Framework → Libraries & Runtime',
      'Apps → Android Framework → Libraries & Runtime → Linux Kernel'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-15',
    question: 'Welche Aufgabe hat der zygote Prozess?',
    options: [
      'Dieser hat die Aufgabe des init Prozesses (vergleichbar mit systemd auf einem Desktop Linux System)',
      'Aus diesem werden die zu startenden Apps als neue Prozesse "geforkt"',
      'Dieser hat die Aufgabe des App-Installers (erscheint für den Benutzer als "Google Play Store" App)'
    ],
    correctIndex: 1
  },
  {
    id: 'hs19-16',
    question: 'Der NDK Build Prozess wird beim JNI-Versuch gesteuert durch das Programm ...',
    options: ['make', 'gradle', 'cmake'],
    correctIndex: 2
  },
  {
    id: 'hs19-17',
    question: 'Der Android-Emulator (AVD) ...',
    options: [
      'kann nur Android-Geräte mit x86-CPU (also Intel-Architektur) emulieren',
      'kann nur Android-Geräte mit ARM-CPU emulieren',
      'kann sowohl Android-Geräte mit ARM wie auch mit x86-CPUs emulieren'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-18',
    question: 'Die "Linux User IDs" werden unter Android ...',
    options: [
      'für die "Using-Permissions" verwendet (jeder Using-Permission wird eine UID zugewiesen)',
      'nur verwendet, wenn auf einem Android Gerät mehrere Benutzer definiert werden',
      'zur Isolation der Apps verwendet (jeder App wird eine eigene UID zugewiesen)'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-19',
    question:
        'Welche Realtime-Eigenschaften sind mit einem "standardmässigen" Android-System realisierbar?',
    options: ['Soft Realtime', 'Hard Realtime', 'Keine (weder Hard- noch Soft-Realtime)'],
    correctIndex: 2
  },
  {
    id: 'hs19-20',
    question:
        'Wenn der Anwender die App schliesst (durch Drücken des "Back" Buttons), so wird in der Folge ...',
    options: [
      'sowohl das Activity Objekt freigegeben wie auch der App Prozess beendet',
      'weder der App Prozess beendet noch das betreffende Activity Objekt freigegeben',
      'zwar das Activity Objekt freigegeben, hingegen der App Prozess normalerweise NICHT beendet'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-21',
    question: 'Länger als ein paar Sekunden dauernde (blockierende) Aktionen sollten bei einer Android App ...',
    options: [
      'in einem separaten Prozess ausgeführt werden',
      'in eine "Service" Component ausgegliedert werden',
      'in einem separaten Thread ausgeführt werden'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-22',
    question: 'Im "Usermode" resp. "Userspace" läuft bei Android nebst den Apps ...',
    options: [
      'nichts (denn das Android Framework und die Libraries laufen im Kernelmode)',
      'das (Java-basierte) Android Framework und die (C-basierten) Libraries',
      'nur noch das Java-basierte Android Framework (die C-basierten Shared Libraries laufen im Kernelmode)'
    ],
    correctIndex: 1
  },
  {
    id: 'hs19-23',
    question:
        'Soll eine App (nur) auf einen Intent reagieren, wenn deren Activity sichtbar ist, so definiert man den Intent Filter ...',
    options: [
      'im AndroidManifest.xml',
      'im Constructor der Activity (entfernt wird er ja automatisch beim "Destroy" der Activity)',
      'in der OnResume() Ereignismethode und deaktiviert diesen wieder in OnPause()'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-24',
    question: 'Welche Android "Component" ist für die GUI-Logik zuständig?',
    options: ['Activity', 'Service', 'Content Provider'],
    correctIndex: 0
  },
  {
    id: 'hs19-25',
    question: 'Das GUI-Layout einer App wird üblicherweise ...',
    options: [
      'in einer gradle Datei definiert (JSON-Format)',
      'in der Methode onCreate() definiert',
      'in einer XML-Datei definiert'
    ],
    correctIndex: 2
  },
  {
    id: 'hs19-26',
    question: 'Herstellertreiber wie der "Radio Interface Layer" (RIL) laufen bei Android typisch ...',
    options: [
      '"Open Source" im Userspace (zwecks Einhaltung der GPL License)',
      '"Closed Source" im Kernelspace (unter Missachtung der GPL License)',
      '"Closed Source" im Userspace (ohne Verletzung von Softwarelizenzen)'
    ],
    correctIndex: 2
  },

  // ===== Kurztest 4 (FS16) =====
  {
    id: 'fs16-01',
    question: 'Ein App "Service" ...',
    options: [
      'darf seinen Hauptthread nicht längere Zeit blockieren',
      'kann nur native (in C) implementiert werden (nicht in Java)',
      'darf länger als 5s aktiv sein'
    ],
    correctIndex: 2
  },
  {
    id: 'fs16-02',
    question: 'Intents in Android ...',
    options: [
      'bilden die Grundlage des Grafik-Subsystems von Android',
      'dienen u.a. der Signalisierung und Kommunikation zwischen Activities und Services',
      'definieren die Zugriffsrechte (permissions) einer Applikation'
    ],
    correctIndex: 1
  },
  {
    id: 'fs16-03',
    question: 'Das Layout einer Activity erstellt man üblicherweise ...',
    options: [
      'dynamisch aus der Activity (mittels Java Statements)',
      'statisch in einer XML-Datei',
      'statisch in einer HTML5-Datei'
    ],
    correctIndex: 1
  },
  {
    id: 'fs16-04',
    question: 'Auf welchen Wert setzen Sie die "targetSdkVersion"?',
    options: [
      'immer auf den SDK-Release des angeschlossenen Gerätes (sonst funktioniert das Debugging nicht)',
      'immer auf den tiefsten SDK-Release, den Sie (gerade noch) mit älteren Geräten unterstützen möchten',
      'in der Regel auf den aktuellsten SDK-Release'
    ],
    correctIndex: 2
  },
  {
    id: 'fs16-05',
    question: 'Auf welche Plattform basiert die aktuelle Android IDE?',
    options: ['Microsoft Visual Studio', 'Eclipse (Open Source)', 'IntelliJ von JetBrains'],
    correctIndex: 2
  },
  {
    id: 'fs16-06',
    question: 'Wo werden Stringkonstanten sinnvollerweise definiert?',
    options: [
      'In einer XML-Datei',
      'In der Activity in welcher der String verwendet wird (z.B. main_activity.java)',
      'In der "Manifest.xml" Datei'
    ],
    correctIndex: 0
  },
  {
    id: 'fs16-07',
    question: 'In welcher Beziehung wurde der Linux-Kernel speziell an Android angepasst?',
    options: [
      'Betreffend Grafik (OpenGL)',
      'Betreffend Anbindung von Input-/Output ("Gerätetreibern")',
      'Betreffend dem Netzwerkzugriff'
    ],
    correctIndex: 2
  },
  {
    id: 'fs16-08',
    question: 'Was wird unter dem "context" verstanden?',
    options: [
      'der aktuelle Zustand des Screens',
      'ein Interface-Objekt zum Android System',
      'der aktuelle Zustand einer Activity'
    ],
    correctIndex: 1
  },
  {
    id: 'fs16-09',
    question: 'Eine Kommunikation zwischen verschiedenen Android Apps ist ...',
    options: [
      'über "Intents" realisierbar',
      'nur über das Dateisystem (via "/data/...") möglich',
      'aus Sicherheitsgründen nicht möglich'
    ],
    correctIndex: 0
  },
  {
    id: 'fs16-10',
    question:
        'Wie lange darf eine Ereignis-Methode in einer Android "Activity" dauern (z.B. aufgrund eines blockierenden Systemaufrufes)?',
    options: [
      'maximal wenige Sekunden',
      'maximal wenige Millisekunden (in Activities sind überhaupt keine Blockierungen zulässig)',
      'beliebig lange (es gibt diesbezüglich keine Restriktion)'
    ],
    correctIndex: 0
  },
  {
    id: 'fs16-11',
    question:
        'Die rekursive Fibonacci-Lösung via JNI ist im Vergleich zur entsprechenden Lösung in Java (und Verwendung der ART) ...',
    options: [
      'mindestens 10x schneller',
      'genau gleich schnell (da beides native Maschinencode)',
      'ca. 3x schneller'
    ],
    correctIndex: 2
  },
  {
    id: 'fs16-12',
    question: 'Alle vom User installierten Android-Applikationen ...',
    options: [
      'laufen immer unter der UID "root" (Android verwendet die Linux User-IDs nicht)',
      'laufen unter der Linux-User-Id (UID) des ausgewählten Benutzerprofils',
      'laufen jeweils unter einer App-spezifischen Linux-User-ID (UID wird bei der Erst-Installation einer App erzeugt)'
    ],
    correctIndex: 2
  },
  {
    id: 'fs16-13',
    question: 'Lizenzrechtlich ist das Android Application Framework bevorzugt ...',
    options: ['Closed Source', 'GPL lizenziert', 'Apache- und BSD lizensiert'],
    correctIndex: 2
  },
  {
    id: 'fs16-14',
    question: 'Per "Java Native Interface" (JNI) kann aus der Java-Umgebung ...',
    options: [
      'Maschinencode im gleichen Prozessraum wie der Java-Code ausgeführt werden',
      'Maschinencode in einem von der Java-Umgebung getrennten Prozessraum ausgeführt werden',
      'Maschinencode im Kernel-Space aufgerufen resp. ausgeführt werden'
    ],
    correctIndex: 0
  },
  {
    id: 'fs16-15',
    question:
        'Android verwendet standardmässig als lokalen Interprozess-Kommunikationsmechanismus (IPC) ...',
    options: [
      'den Linux D-Bus (via Kernel Module "Kdbus")',
      'die "UNIX-Sockets"',
      'den so genannten "Binder"'
    ],
    correctIndex: 2
  },
  {
    id: 'fs16-16',
    question: 'Der Quellcode der Android-Plattform ...',
    options: [
      'wird in einer jederzeit für jeden offenen Community weiterentwickelt (vergleichbar mit dem Linux-Kernel)',
      'wird in einer geschlossenen Community weiterentwickelt, ist der Allgemeinheit aber letztendlich trotzdem zugänglich',
      'ist nur den Mitgliedern der "Open Handset Alliance" zugänglich (Closed Source)'
    ],
    correctIndex: 1
  },
  {
    id: 'fs16-17',
    question:
        'Wenn Ihre App auf Geräte-Ereignisse reagieren soll (z.B. eingehenden Anruf), so ist hierfür seitens Ihrer App folgendes nötig:',
    options: ['ein "Content Provider"', 'ein "Broadcast Receiver"', 'ein "Service"'],
    correctIndex: 1
  },
  {
    id: 'fs16-18',
    question: 'Mit dem Android Native Development Kit (NDK) können ...',
    options: [
      'nur C-Anwendungen erstellt werden',
      'sowohl C-Anwendungen als auch native Shared und Static Libraries erstellt werden',
      'nur native Shared Libraries erstellt werden'
    ],
    correctIndex: 1
  },
  {
    id: 'fs16-19',
    question: 'Der Java Datentyp "int" ...',
    options: [
      'ist je nach System inkompatibel zum C Datentyp "int" und muss deshalb mit einer speziellen Funktion für jeden int-Speicherzugriff konvertiert werden',
      'ist je nach System inkompatibel zum C Datentyp "int", kann aber in C Datentyp direkt abgebildet werden (Zugriff ohne Konversion möglich)',
      'ist mit dem C Datentyp "int" immer identisch (typenkompatibel)'
    ],
    correctIndex: 1
  },
  {
    id: 'fs16-20',
    question: 'Welche Display-Anzeigen kann ein "Service" erzeugen?',
    options: [
      'Eine Notification in die Statusleiste zu platzieren',
      'weder noch, "Services" können sich auf dem Screen überhaupt nicht bemerkbar machen',
      'Eine "Toast" Meldung'
    ],
    correctIndex: 0
  },
  {
    id: 'fs16-21',
    question: 'Der Programm-Code in einem APK (App Package) ...',
    options: [
      'ist weder Java Byte Code noch native Maschinencode',
      'ist Java Byte Code',
      'ist vorkompilierter native Maschinencode (der betr. CPU-Architektur)'
    ],
    correctIndex: 0
  },
  {
    id: 'fs16-22',
    question: 'Die Sicherheitserweiterung SELinux (Security Enhanced Linux) ist im aktuellen Android Release ...',
    options: [
      'zwar vorhanden, bringt sicherheitstechnisch aber keine Verbesserung, da das Android Framework sowieso immer Read-Only installiert ist (d.h. nur werbetechnisch integriert)',
      'vorhanden und bringt sicherheitstechnisch tatsächlich eine Verbesserung',
      'zwar vorhanden, bringt sicherheitstechnisch aber keine Verbesserung, da keine wirksamen SELinux-Policies definiert sind (d.h. nur werbetechnisch integriert)'
    ],
    correctIndex: 1
  },
  {
    id: 'fs16-23',
    question: 'Google gestattet es den Android Geräteherstellern ...',
    options: [
      'nicht, Komponenten des Android-Frameworks zu ersetzen',
      'nur einige wenige Komponenten zu ersetzen (insbes. RIL, Graphik-Treiber und den Homescreen-Launcher)',
      'beliebige Komponenten des Android Frameworks zu ersetzen'
    ],
    correctIndex: 1
  },
  {
    id: 'fs16-24',
    question: 'Was ist zwingend nötig, wenn Sie eine Android App selbst entwickeln?',
    options: ['das Android NDK', 'das Android SDK', 'das Android AOSP'],
    correctIndex: 1
  },
  {
    id: 'fs16-25',
    question: 'Wozu dienen die "Android Support Libraries"?',
    options: [
      'Um die "Google Apps" in eigenen Apps einzubinden (z.B. Google Maps)',
      'Um Funktionen neuerer Android API Levels auch auf älteren Geräten verwenden zu können',
      'Die "Android Support Libraries" sind das API zum Android Framework'
    ],
    correctIndex: 1
  },
  {
    id: 'fs16-26',
    question: 'Mittels so genannter "Fragments" ...',
    options: [
      'lässt sich eine App besser an unterschiedliche Display-Grössen anpassen',
      'lässt sich der Datenverkehr bei schlechten Verbindungen besser in kleinere Einheiten teilen',
      'lässt sich Daten einer SQL-Datenbank effizienter gruppieren'
    ],
    correctIndex: 0
  },
  {
    id: 'fs16-27',
    question: 'Der Radio Interface Layer (RIL) läuft ...',
    options: [
      'in einer Virtual Machine (zwecks Portabilität auf verschiedene CPU-Architekturen)',
      'im Linux Kernelspace (aus technischen Gründen)',
      'im Userspace (aus nicht-technischen Gründen)'
    ],
    correctIndex: 2
  },
  {
    id: 'fs16-28',
    question:
        'Welche Activity-Ereignismethode wird jedenfalls ausgeführt bevor die Android-Umgebung den App-Prozess vollständig beendet?',
    options: ['onStop()', 'onPause()', 'onDestroy()'],
    correctIndex: 1
  },
  {
    id: 'fs16-29',
    question: 'Der "Android Emulator Device" (AVD) auf dem PC ...',
    options: [
      'kann nur ein Gerät mit ARM CPU emulieren (denn Android unterstützt nur diese Architektur)',
      'kann sowohl eine ARM-CPU als auch eine x86-CPU emulieren (letzteres schneller)',
      'kann nur ein Android-Gerät mit einer PC-kompatiblen CPU-Architektur emulieren (also x86)'
    ],
    correctIndex: 1
  },

  // ===== Kurztest 2 (HS19) =====
  {
    id: 'kt2hs19-01',
    question:
        'Bei CGI (Common Gateway Interface) startet der Webserver den ausgelagerten Programmteil ...',
    options: [
      'als Shared Library',
      'als separaten "Child Process"',
      'als Thread des Webserver-Prozesses (also im gleichen Prozessraum wie dieser)'
    ],
    correctIndex: 1
  },
  {
    id: 'kt2hs19-02',
    question:
        'Mit welchem (File-)System-Call kann das Anwenderprogramm typischerweise treiberspezifische Funktionen oder Einstellungen ausführen?',
    options: ['system()', 'mmap()', 'ioctl()'],
    correctIndex: 2
  },
  {
    id: 'kt2hs19-03',
    question:
        'Bei welchem Verfahren findet für einen Hardwarezugriff aus dem Userspace KEIN Context-Switch in den Kernelspace statt?',
    options: [
      'bei Zugriff via /dev/mem resp. mmap()',
      'bei Zugriff über einen Devicenode',
      'bei Zugriff via Sysfs (über /sys/class/...)'
    ],
    correctIndex: 0
  },
  {
    id: 'kt2hs19-04',
    question:
        'Beim Extended Regular Expression \'abc(.*)fgh\' haben die runden Klammern folgende Bedeutung:',
    options: [
      '"einfangen" eine Gruppe von Zeichen (zwecks Wiederverwendung)',
      'optionale Angabe (der in Klammern aufgeführte Text muss nicht zwingend vorhanden sein)',
      'Zeichenauswahl (ein in Klammern aufgeführtes Zeichen muss zutreffen)'
    ],
    correctIndex: 0
  },
  {
    id: 'kt2hs19-05',
    question: 'Bei Linux erfolgt das Einlagern eines statisch gelinkten Programmteils ins Physical Memory ...',
    options: [
      'ohne "On Demand Paging" (also unmittelbar bei Programmstart)',
      'mittels "On Demand Paging" (wie bei dyn. gelinkten Programmteilen)',
      'ohne Paging (die CPU arbeitet direkt mit physikalischen Speicheradressen)'
    ],
    correctIndex: 1
  },
  {
    id: 'kt2hs19-06',
    question: 'Was ist via mmap() System Call NICHT realisierbar?',
    options: [
      'Direktzugriffe auf Peripherieregister des SoC',
      'Interrupts resp. Asynchron Notifications',
      'Mappen einer Datei in den virtuellen Prozessraum der Anwendung'
    ],
    correctIndex: 1
  },
  {
    id: 'kt2hs19-07',
    question: 'Die Einträge einer "Page Table" zeigen auf ...',
    options: [
      'Virtual Memory Pages',
      'Page Directories (oder wiederum auf Page Tables)',
      'Physical Memory Pages'
    ],
    correctIndex: 2
  },
  {
    id: 'kt2hs19-08',
    question: 'Welche Art Devices lassen sich ins Virtual Filesystem (VFS) "mounten"?',
    options: ['Devices, für welche es einen Devicenode gibt', 'Character Devices', 'Block Devices'],
    correctIndex: 2
  },
  {
    id: 'kt2hs19-09',
    question: 'Welche Dateisysteme eignen sich für Flash basierte Speicher am besten?',
    options: [
      'Journalling Filesystems',
      'Dateisysteme ganz ohne Journal- und Log-Mechanismus',
      'Log Structured Filesystems'
    ],
    correctIndex: 2
  },
  {
    id: 'kt2hs19-10',
    question:
        'Verwendet man bei einem Flash Speicher ein ext4 Dateisystem, so befindet sich der "Flash Translation Layer" ...',
    options: ['auf dem Flash Device', 'im Block Device Driver (z.B. mmcblk0)', 'im Filesystem Driver (ext4)'],
    correctIndex: 0
  },
  {
    id: 'kt2hs19-11',
    question:
        'In welchem Fall bringt die Aufteilung in Page Directories und Page Tables den grössten Vorteil?',
    options: [
      'Bei Verwendung von Shared Libraries',
      'Wenn nur ein kleiner Teil des maximal möglichen virtuellen Adressraumes gepaged wird (also z.B. nur 1MB bei 32-Bit Adressraum)',
      'Wenn der maximal mögliche virtuelle Adressraum gepaged wird (also z.B. 4GB bei 32-Bit Adressraum)'
    ],
    correctIndex: 1
  },
  {
    id: 'kt2hs19-12',
    question: 'Bei welcher Variante ist die Lebensdauer eines Flashspeichers am längsten?',
    options: [
      'bei stets reichlich freiem Diskspace',
      'mittels dynamischem Wearleveling',
      'mittels statisches Wearleveling'
    ],
    correctIndex: 2
  },
  {
    id: 'kt2hs19-13',
    question: 'Ein "Page Fault" wird immer ...',
    options: [
      'im Userspace behandelt (das Userspace-Programm lädt die betreffende Page nach)',
      'im Kernel behandelt (das Programm im "Userspace" merkt davon nichts)',
      'hardwaremässig behandelt (die MMU lagert die betreffende Page selbständig ein)'
    ],
    correctIndex: 1
  },
  {
    id: 'kt2hs19-14',
    question: 'Bei welcher Datei-Zugriffsvariante finden typischerweise mehr System Calls statt?',
    options: [
      'bei Buffered File IO (fopen, fread, fwrite, ...)',
      'sowohl bei "Buffered" wie "Unbuffered" finden im Mittel immer genau gleich viele System Calls statt',
      'bei Unbuffered File IO (open, read, write, ...)'
    ],
    correctIndex: 2
  },
  {
    id: 'kt2hs19-15',
    question: 'Welcher Typ Flash Device hat die grösste Lebensdauer?',
    options: ['TLC', 'SLC', 'MLC'],
    correctIndex: 1
  }
]