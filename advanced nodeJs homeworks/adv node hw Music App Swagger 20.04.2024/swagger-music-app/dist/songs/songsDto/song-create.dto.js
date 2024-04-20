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
exports.SongCreateDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const genre_enum_1 = require("../../common/enums/genre.enum");
class SongCreateDTO {
}
exports.SongCreateDTO = SongCreateDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Name of the song',
        example: 'Changes',
        required: true,
    }),
    __metadata("design:type", String)
], SongCreateDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(30),
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'Duration of the song in seconds',
        example: 200,
        minimum: 30,
        required: true,
    }),
    __metadata("design:type", Number)
], SongCreateDTO.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(genre_enum_1.Genre),
    (0, swagger_1.ApiProperty)({
        enum: genre_enum_1.Genre,
        description: 'The genre of the song',
        example: genre_enum_1.Genre.HIP_HOP,
        required: true,
    }),
    __metadata("design:type", String)
], SongCreateDTO.prototype, "genre", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        description: "ID of the artist. If the artist doesn't have any songs, the value is null",
        default: null,
        example: '0868b3df-7527-4d9c-8725-21c33d302f07',
    }),
    __metadata("design:type", String)
], SongCreateDTO.prototype, "artistId", void 0);
//# sourceMappingURL=song-create.dto.js.map