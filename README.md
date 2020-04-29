# JSONTS
A tool to convert json to complete customized typescript class.

## Usage
```
JSONTS
A tool to convert json to a complete customized typescript class

OPTIONS
    --input      -i  Specifies the input json file
    --title      -t  Title of the output model (default="MyModel")
    --comments   -c  Enables the general comments if "true" (default=false)
    --targetCase     Can be one of "PascalCase", "CamelCase", "Underscore" (default=CamelCase)
    --constructor    Generates constructor if "true" (default=false)
    --checkFields    Makes the constructor private and creates a static method to check fields (default=false)
    --jsonMethod     Generates a method to convert this model back to json with new values

NOTES
If you use --checkFields option, generated model will use some custom helper functions.
To get helper functions type "jsonts helpers"

```

## Example
FILE: test.json

```json
{
	"Name":"string",
	"family":"string",
	"Age": 25,
	"isMale": false
}
```
COMMAND:
```
jsonts -i ~/test.json -t Person --comment
```
And result will be printed in terminal / cmd:
```ts
export class Person {
    age: number;
    name: string;
    family: string;
    isMale: boolean;

    /**
     * The default constructor of person class
     * @param obj prepared object
     */
    constructor(obj: any) {
        this.age = obj.Age
        this.name = obj.Name
        this.family = obj.family
        this.isMale = obj.isMale
    } 
}
```
