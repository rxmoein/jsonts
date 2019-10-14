# JSONTS
A tool to convert json to complete customized typescript class.

## Install

```
npm install --global @smoein/jsonts
```
## Usage
```
JSONTS
A tool to convert json to a complete customized typescript class

OPTIONS
   --input      -i  Specifies the input json file
   --title      -t  Title of the output model (default="MyModel")
   --comments   -c  Enables the general comments if "true" (default=false)
   --targetCase     Can be one of "PascalCase", "CamelCase", "Underscore" (default=CamelCase)
   --constructor    Generates constructor if "true" (default=true)
```

## Example
FILE: test.js

```json
{
	"Name":"string",
	"family":"string",
	"age": 25,
	"isMale": false
}
```
COMMAND:
```
jsonts -i ~/test.json -o file.ts -t food --comment
```
And result will be printed in terminal / cmd:
```ts
export class Food {
    age: number;
    name: string;
    family: string;
    isMale: boolean;

    /**
     * The default constructor of food class
     * @param obj prepared object
     */
    constructor(obj: any) {
        this.age = obj.age
        this.name = obj.Name
        this.family = obj.family
        this.isMale = obj.isMale
    } 
}
```
