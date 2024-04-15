## CLI commands for using nestJs

1. nest new <nameOfProject> -g => creates a new nest project 
2. nest generate module <randomName> => creates a module
3. nest generate controller <randomName> => creates a controller
4. nest generate service <randomName> --no-spec => creates a service (the --no-spec doesn't create a spec file)
5. npm i --save class-validator class-transformer => installs a class validator and a class tranformer

## For creating a '/api', in the main.ts add: 
    app.setGlobalPrefix('/api')