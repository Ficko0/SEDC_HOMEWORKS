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
exports.Artist = void 0;
const swagger_1 = require("@nestjs/swagger");
const song_entity_1 = require("../songs/song.entity");
const typeorm_1 = require("typeorm");
let Artist = class Artist {
};
exports.Artist = Artist;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '0868b3df-7527-4d9c-8725-21c33d302f07',
    }),
    __metadata("design:type", String)
], Artist.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: String,
    }),
    (0, swagger_1.ApiProperty)({
        type: String,
        minLength: 2,
        example: 'Name of the artist',
    }),
    __metadata("design:type", String)
], Artist.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: Number,
    }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        minimum: 20,
        example: 20,
    }),
    __metadata("design:type", Number)
], Artist.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: String,
    }),
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Country of the artist',
    }),
    __metadata("design:type", String)
], Artist.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => song_entity_1.Song, (song) => song.artist),
    __metadata("design:type", Array)
], Artist.prototype, "songs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '1878-01-01 00:00:00',
    }),
    __metadata("design:type", Date)
], Artist.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '1878-01-01 00:00:00',
    }),
    __metadata("design:type", Date)
], Artist.prototype, "updatedAt", void 0);
exports.Artist = Artist = __decorate([
    (0, typeorm_1.Entity)()
], Artist);
//# sourceMappingURL=artitst.entity.js.map