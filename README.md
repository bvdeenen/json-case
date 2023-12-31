# json-case

`json-case` is a tool that allows changing the case of keys in a json (or yaml)
file from _camel-case_ to _snake-case_ and vice versa.

`json-case` has two flags:
* `-c`: output all keys in camel-case. By default all keys are in snake-case.
* `-y`: output in yaml. By default the tool outputs in json.


If an argument of `json-case` points to a file with a name ending in `yaml` or
`json` it will parse that, otherwise it'll wait for standard in, which allows
using it in _pipes_.

It's a very quick-and-dirty tool, but does the job.

Enjoy.

    cat sample.yaml
    hello:
      hiThere: 1
      hello_everyone:
        nestedOne: 2
        nested_two: 3

    json-case sample.yaml -y
    hello:
      hi_there: 1
      hello_everyone:
        nested_one: 2
        nested_two: 3

    json-case sample.yaml -y -c
    hello:
      hiThere: 1
      helloEveryone:
        nestedOne: 2
        nestedTwo: 3

    json-case sample.yaml -c
    {"hello":{"hiThere":1,"helloEveryone":{"nestedOne":2,"nestedTwo":3}}}

    cat sample.yaml | json-case  -c
    {"hello":{"hiThere":1,"helloEveryone":{"nestedOne":2,"nestedTwo":3}}} 

## Build and install

    npm install
    npm run build
    npm install -g
