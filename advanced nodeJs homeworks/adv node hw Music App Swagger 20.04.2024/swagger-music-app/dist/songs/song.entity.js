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
exports.Song = void 0;
const artitst_entity_1 = require("../artist/artitst.entity");
const genre_enum_1 = require("../common/enums/genre.enum");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Song = class Song {
};
exports.Song = Song;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'c293e63f-57e5-4515-bdd5-893611ad8c32',
    }),
    __metadata("design:type", String)
], Song.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: String,
    }),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Name of the song',
    }),
    __metadata("design:type", String)
], Song.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: Number,
    }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 100,
    }),
    __metadata("design:type", Number)
], Song.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: genre_enum_1.Genre,
        enumName: 'genre',
    }),
    (0, swagger_1.ApiProperty)({
        enum: genre_enum_1.Genre,
        example: genre_enum_1.Genre.HIP_HOP,
    }),
    __metadata("design:type", String)
], Song.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'artist_id',
        nullable: true,
    }),
    (0, swagger_1.ApiPropertyOptional)({
        type: String,
        example: '0868b3df-7527-4d9c-8725-21c33d302f07',
    }),
    __metadata("design:type", String)
], Song.prototype, "artistId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artitst_entity_1.Artist, (artist) => artist.songs),
    (0, typeorm_1.JoinColumn)({
        name: 'artist_id',
    }),
    __metadata("design:type", artitst_entity_1.Artist)
], Song.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '1878-01-01 00:00:00',
    }),
    __metadata("design:type", Date)
], Song.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '1878-01-01 00:00:00',
    }),
    __metadata("design:type", Date)
], Song.prototype, "updatedAt", void 0);
exports.Song = Song = __decorate([
    (0, typeorm_1.Entity)()
], Song);
//# sourceMappingURL=song.entity.js.map