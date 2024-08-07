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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artitst_entity_1 = require("./artitst.entity");
const typeorm_2 = require("typeorm");
let ArtistService = class ArtistService {
    constructor(artistRepo) {
        this.artistRepo = artistRepo;
    }
    async getArtists() {
        return this.artistRepo.find({
            relations: {
                songs: true,
            },
        });
    }
    async createArist(body) {
        const newArtist = this.artistRepo.create(body);
        return this.artistRepo.save(newArtist);
    }
    async updateArtist(id, body) {
        const artist = await this.artistRepo.findOneByOrFail({ id });
        const updatedArtist = this.artistRepo.merge(artist, body);
        return this.artistRepo.save(updatedArtist);
    }
    async deleteArtist(id) {
        await this.artistRepo.delete({ id });
    }
};
exports.ArtistService = ArtistService;
exports.ArtistService = ArtistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(artitst_entity_1.Artist)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArtistService);
//# sourceMappingURL=artist.service.js.map