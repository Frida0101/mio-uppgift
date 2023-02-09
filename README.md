# Produktlistning Mio-övning

Övningen går ut på att göra en react app för att presentera produktdata enligt kravlistan nedan. I repot ingår en react template som du kan utgå ifrån. Det är även uppsatt en json-server som startar automatiskt om du följer stegen för [starta lokalt](#starta-applikationen-lokalt). Denna server startar på port 3001 och har primärt två endpoints, du kan läsa mer om dem [här](#api-referens).

I datan så ligger det en realtiv path till bilderna. Du kommer att behöva lägga på en bas-URL till bilderna för att komma åt dem.
URL för bilder: https://www.mcdn.net

Här är ett exempel på hur en lösning skulle kunna se ut: https://genuine-fenglisu-92c840.netlify.app

## Kravlista:

    1. Det ska finnas en vy för att se alla produkter.
    2. Det ska finnas ett sök som går på produktnamn.
    3. Det ska gå att klicka in på en produkt för att få mer information.
    4. Om en kampanj är satt på en produkt så ska detta kampanjnamn visas samt en beräkning av nytt pris baserat på kampanjens procentrabatt.
    5. En check kommer behöva finnas för följande:
      * Ett produktpris får inte understiga 0.
      * Visa inte produkt om bild inte finns.
      * Avrunda priser som har decimaler.

## Starta applikationen lokalt

Klona projektet

```bash
  git clone https://github.com/mio-ab/Mio.ReactExercise.git
```

Navigera till projektmappen

```bash
  cd Mio.ReactExercise
```

Installera dependencies

```bash
  npm install
```

Starta servern

```bash
  npm run start
```


## API Referens

#### Hämta alla produkter

```http
  GET http://localhost:3001/products
```

#### Hämta en produkt

```http
  GET http://localhost:3001/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**: produktens id  |
