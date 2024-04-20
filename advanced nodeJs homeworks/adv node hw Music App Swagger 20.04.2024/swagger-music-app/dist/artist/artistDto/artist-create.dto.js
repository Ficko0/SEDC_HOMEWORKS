"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistCreateDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class ArtistCreateDTO {
}
exports.ArtistCreateDTO = ArtistCreateDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Name of the artist',
        example: 'Ice Cube',
        minLength: 2,
        required: true,
    }),
    __metadata("design:type", String)
], ArtistCreateDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(20),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'The age of the artist',
        example: 20,
        minimum: 20,
        required: true,
    }),
    __metadata("design:type", Number)
], ArtistCreateDTO.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Country of the artist',
        example: 'North America',
        required: true,
    }),
    __metadata("design:type", String)
], ArtistCreateDTO.prototype, "country", void 0);
//# sourceMappingURL=artist-create.dto.js.map