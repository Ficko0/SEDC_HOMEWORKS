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
const artist_entity_1 = require("../artists/artist.entity");
const songs_enum_1 = require("../common/enums/songs.enum");
const typeorm_1 = require("typeorm");
let Song = class Song {
};
exports.Song = Song;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Song.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Song.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Song.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: songs_enum_1.Genre,
        enumName: 'genre',
    }),
    __metadata("design:type", String)
], Song.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artist_entity_1.Artist, (artist) => artist.songs),
    (0, typeorm_1.JoinColumn)({
        name: 'artist_id',
    }),
    __metadata("design:type", artist_entity_1.Artist)
], Song.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        name: 'artist_id',
    }),
    __metadata("design:type", String)
], Song.prototype, "artistId", void 0);
exports.Song = Song = __decorate([
    (0, typeorm_1.Entity)()
], Song);
//# sourceMappingURL=songs.entity.js.map