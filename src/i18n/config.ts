import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: localStorage.getItem('language') || 'en',
  resources: {
    en: {
      translations: {
        "planets": "Planets",
        "overview": "Overview",
        "structure": "Internal Structure",
        "geology": "Surface Geology",
        "rotation": "Rotation Time",
        "revolution": "Revolution Time",
        "radius": "Radius",
        "temperature": "Average Temperature",
        "source": "Source",
        "mercury": "Mercury",
        "venus": "Venus",
        "earth": "Earth",
        "mars": "Mars",
        "jupiter": "Jupiter",
        "saturn": "Saturn",
        "uranus": "Uranus",
        "neptune": "Neptune",
        "loading": "Loading...",
        "error": "Error loading planet data",
        "reload": "Reload page",
        "mercury_overview": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        "mercury_structure": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        "mercury_geology": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        
        "venus_overview": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        "venus_structure": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        "venus_geology": "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
        
        "earth_overview": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        "earth_structure": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        "earth_geology": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
        
        "mars_overview": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
        "mars_structure": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
        "mars_geology": "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
        
        "jupiter_overview": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        "jupiter_structure": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
        "jupiter_geology": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
        
        "saturn_overview": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        "saturn_structure": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
        "saturn_geology": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
        
        "uranus_overview": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        "uranus_structure": "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
        "uranus_geology": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
        
        "neptune_overview": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        "neptune_structure": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
        "neptune_geology": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
      }
    },
    ka: {
      translations: {
        "planets": "პლანეტები",
        "overview": "მიმოხილვა",
        "structure": "შიდა სტრუქტურა",
        "geology": "ზედაპირის გეოლოგია",
        "rotation": "ბრუნვის დრო",
        "revolution": "ორბიტული პერიოდი",
        "radius": "რადიუსი",
        "temperature": "საშუალო ტემპერატურა",
        "source": "წყარო",
        "mercury": "მერკური",
        "venus": "ვენერა",
        "earth": "დედამიწა",
        "mars": "მარსი",
        "jupiter": "იუპიტერი",
        "saturn": "სატურნი",
        "uranus": "ურანი",
        "neptune": "ნეპტუნი",
        "loading": "იტვირთება...",
        "error": "შეცდომა მონაცემების ჩატვირთვისას",
        "reload": "გვერდის განახლება",

        "mercury_overview": "მერკური არის ყველაზე პატარა პლანეტა მზის სისტემაში და ყველაზე ახლოს მზესთან. მზის გარშემო მისი ორბიტა გრძელდება 87,97 დედამიწის დღე, რაც ყველაზე მოკლეა მზის ყველა პლანეტაზე. მერკური არის მზის სისტემის ოთხი ხმელეთის პლანეტადან ერთ-ერთი. და დედამიწის მსგავსი კლდოვანი სხეულია.",
        "mercury_structure": "მერკური, როგორც ჩანს, აქვს მყარი სილიკატური ქერქი და მანტია, რომელიც გადაფარავს მყარი, რკინის სულფიდის ბირთვის გარე ფენას, უფრო ღრმა თხევადი ბირთვის ფენას და მყარი შიდა ბირთვს. პლანეტის სიმკვრივე მეორეა მზის სისტემაში 5,427. გ/სმ3, მხოლოდ ოდნავ ნაკლები დედამიწის სიმკვრივეზე.",
        "mercury_geology": "მერკურიის ზედაპირი გარეგნულად მთვარის ზედაპირის მსგავსია, გვიჩვენებს კვერნის მსგავს ვრცელ დაბლობებს და მძიმე კრატერებს, რაც მიუთითებს იმაზე, რომ ის გეოლოგიურად არააქტიური იყო მილიარდობით წლის განმავლობაში. ის უფრო ჰეტეროგენულია ვიდრე მარსის ან მთვარის ზედაპირი. ",

        "venus_overview": "ვენერა არის მეორე პლანეტა მზიდან. მას დაარქვეს სიყვარულისა და სილამაზის რომაული ქალღმერთის სახელი. როგორც ყველაზე კაშკაშა ბუნებრივი ობიექტი დედამიწის ღამის ცაზე მთვარის შემდეგ, ვენერას შეუძლია ჩრდილები და იშვიათ შემთხვევებში. ხილული შეუიარაღებელი თვალით დღისით.",
        "venus_structure": "ვენერასა და დედამიწას შორის ზომისა და სიმკვრივის მსგავსება ვარაუდობს, რომ მათ აქვთ მსგავსი შიდა სტრუქტურა: ბირთვი, მანტია და ქერქი. დედამიწის მსგავსად, ვენერას ბირთვი, სავარაუდოდ, ნაწილობრივ მაინც თხევადია, რადგან ორ პლანეტას აქვს. გაცივდა დაახლოებით იგივე სიჩქარით.",
        "venus_geology": "ვენერას ზედაპირის დიდი ნაწილი, როგორც ჩანს, ვულკანურმა აქტივობამ შექმნა. ვენერას დედამიწაზე რამდენჯერმე მეტი ვულკანი აქვს და მას აქვს 100 კმ-ზე მეტი დიამეტრის 167 ვულკანი. ერთადერთი ვულკანური კომპლექსი. ამ ზომის დედამიწაზე არის ჰავაის დიდი კუნძული.",

        "earth_overview": "მესამე პლანეტა მზიდან და ერთადერთი ცნობილი პლანეტა, სადაც სიცოცხლეა. დედამიწის ზედაპირის დაახლოებით 29.2% არის ხმელეთი, დარჩენილი 70.8% დაფარულია წყლით. დედამიწის დაშორება მზიდან, ფიზიკური თვისებები და გეოლოგიური ისტორია იძლევა სიცოცხლის საშუალებას. განვითარება და აყვავება.",
        "earth_structure": "დედამიწის შინაგანი, ისევე როგორც სხვა ხმელეთის პლანეტების, დაყოფილია ფენებად მათი ქიმიური ან ფიზიკური (რეოლოგიური) თვისებების მიხედვით. გარე ფენა არის ქიმიურად განსხვავებული სილიკატური მყარი ქერქი, რომელიც დაფარულია მაღალი ბლანტიანი მყარი მანტიით. .",
        "earth_geology": "დედამიწის მთლიანი ზედაპირის ფართობი დაახლოებით 510 მილიონი კმ2-ია. კონტინენტური ქერქი შედგება დაბალი სიმკვრივის მასალისგან, როგორიცაა ცეცხლოვანი ქანები გრანიტი და ანდეზიტი. ნაკლებად გავრცელებულია ბაზალტი, უფრო მკვრივი ვულკანური კლდე, რომელიც არის ძირითადი შემადგენელი ნაწილი. ოკეანის ფსკერები.",

        "mars_overview": "მარსი არის მეოთხე პლანეტა მზიდან და მეორე ყველაზე პატარა პლანეტა მზის სისტემაში, რომელიც მხოლოდ მერკურიზე დიდია. ინგლისურად მარსი ატარებს რომაული ომის ღმერთის სახელს და ხშირად მოიხსენიება როგორც \"წითელი პლანეტა\".",
        "mars_structure": "დედამიწის მსგავსად, მარსი დიფერენცირებულია მკვრივ მეტალის ბირთვად, რომელიც დაფარულია ნაკლებად მკვრივი მასალებით. მეცნიერებმა თავდაპირველად დაადგინეს, რომ ბირთვი ნაწილობრივ მაინც თხევადი იყო. მისი ინტერიერის ამჟამინდელი მოდელები გულისხმობს ბირთვს, რომელიც შედგება ძირითადად რკინისა და ნიკელისგან, დაახლოებით. 16-17% გოგირდი.",
        "mars_geology": "მარსი არის ხმელეთის პლანეტა, რომლის ზედაპირი შედგება მინერალებისგან, რომლებიც შეიცავს სილიციუმს და ჟანგბადს, ლითონებს და სხვა ელემენტებს, რომლებიც ჩვეულებრივ ქმნიან ქანებს. ზედაპირი ძირითადად შედგება თოლეიტური ბაზალტისგან, თუმცა ნაწილები უფრო მდიდარია სილიციუმით ვიდრე ტიპიური ბაზალტი. .",

        "jupiter_overview": "იუპიტერი არის მეხუთე პლანეტა მზიდან და ყველაზე დიდი მზის სისტემაში. ეს არის გაზის გიგანტი, რომლის მასა ორნახევარჯერ აღემატება მზის სისტემის ყველა სხვა პლანეტას ერთად, მაგრამ ერთზე ნაკლები. მზის მასის ათასი მეათედი.",
        "jupiter_structure": "როდესაც ჯუნო 2016 წელს ჩამოვიდა, მან აღმოაჩინა, რომ იუპიტერს აქვს ძალიან დიფუზური ბირთვი, რომელიც ერევა მის მანტიაში. შესაძლო მიზეზი არის ათი დედამიწის მასის პლანეტის ზემოქმედება იუპიტერის ჩამოყალიბებიდან რამდენიმე მილიონი წლის შემდეგ. არღვევდა თავდაპირველ მყარ იოვიანის ბირთვს.",
        "jupiter_geology": "იუპიტერის ყველაზე ცნობილი მახასიათებელია დიდი წითელი ლაქა, მუდმივი ანტიციკლონური ქარიშხალი, რომელიც მდებარეობს ეკვატორიდან სამხრეთით 22°. ცნობილია, რომ ის არსებობდა სულ მცირე 1831 წლიდან და შესაძლოა 1665 წლიდან.",
        
        "saturn_overview": "სატურნი არის მეექვსე პლანეტა მზიდან და სიდიდით მეორე მზის სისტემაში, იუპიტერის შემდეგ. ეს არის გაზის გიგანტი, რომლის საშუალო რადიუსი დაახლოებით ცხრანახევარჯერ აღემატება დედამიწას. მას აქვს მხოლოდ ერთი. -მერვე დედამიწის საშუალო სიმკვრივეზე.",
        "saturn_structure": "მიუხედავად იმისა, რომ ძირითადად შედგება წყალბადისა და ჰელიუმისგან, სატურნის მასის უმეტესი ნაწილი არ არის გაზურ ფაზაში, რადგან წყალბადი ხდება არაიდეალური სითხე, როდესაც სიმკვრივე აღემატება 0,01 გ/სმ3-ს, რომელიც მიიღწევა 99,9-ის შემცველ რადიუსში. სატურნის მასის %.",
        "saturn_geology": "სატურნის გარე ატმოსფერო შეიცავს 96.3% მოლეკულურ წყალბადს და 3.25% ჰელიუმს მოცულობით. პლანეტის ყველაზე ცნობილი მახასიათებელია მისი გამორჩეული რგოლის სისტემა, რომელიც ძირითადად შედგება ყინულის ნაწილაკებისგან მცირე რაოდენობით კლდოვანი ნამსხვრევებით და მტვერით. ",

        "uranus_overview": "ურანი მეშვიდე პლანეტაა მზიდან. მისი სახელი არის ცის ბერძნული ღმერთის, ურანის მითითება, ბერძნული მითოლოგიის მიხედვით, იყო არესის დიდი ბაბუა. მას აქვს სიდიდით მესამე პლანეტარული რადიუსი და მეოთხე უდიდესი პლანეტარული მასა მზის სისტემაში.",
        "uranus_structure": "ურანის სტრუქტურის სტანდარტული მოდელი არის ის, რომ იგი შედგება სამი ფენისგან: კლდოვანი (სილიკატური/რკინა-ნიკელი) ბირთვი ცენტრში, ყინულოვანი მანტია შუაში და გარე აირისებრი წყალბადის/ჰელიუმის გარსი. ბირთვი. შედარებით მცირეა, მხოლოდ 0,55 დედამიწის მასის მასით.",
        "uranus_geology": "ურანის ატმოსფეროს შემადგენლობა განსხვავდება მისი ძირითადი ნაწილისგან, შედგება ძირითადად მოლეკულური წყალბადისა და ჰელიუმისგან. ჰელიუმის მოლური ფრაქცია, ანუ ჰელიუმის ატომების რაოდენობა გაზის მოლეკულაზე, არის 0.15±0.03 ზედა ტროპოსფეროში." ,

        "neptune_overview": "ნეპტუნი არის მერვე და ყველაზე შორს ცნობილი მზის პლანეტა მზიდან. მზის სისტემაში, ის არის მეოთხე უდიდესი პლანეტა დიამეტრით, მესამე ყველაზე მასიური პლანეტა და ყველაზე მკვრივი გიგანტური პლანეტა. 17-ჯერ აღემატება დედამიწას, უფრო მასიური ვიდრე მისი ტყუპისცალი ურანი.",
        "neptune_structure": "ნეპტუნის შინაგანი სტრუქტურა ჰგავს ურანს. მისი ატმოსფერო შეადგენს მისი მასის დაახლოებით 5%-დან 10%-მდე და ვრცელდება ბირთვისკენ, შესაძლოა, 10%-დან 20%-მდე. მეთანის, ამიაკის და წყლის მზარდი კონცენტრაცია გვხვდება. ქვედა რაიონებში.",
        "neptune_geology": "ნეპტუნის ატმოსფერო არის 80% წყალბადი და 19% ჰელიუმი. ასევე არის მეთანის კვალი. მეთანის შთამნთქმელი ზოლები არსებობს 600 ნმ ტალღის სიგრძეზე, სპექტრის წითელ და ინფრაწითელ ნაწილში."
      }
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

export default i18n;
