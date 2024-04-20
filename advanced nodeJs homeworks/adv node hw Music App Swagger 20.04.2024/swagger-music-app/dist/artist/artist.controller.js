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
exports.ArtistController = void 0;
const common_1 = require("@nestjs/common");
const artist_service_1 = require("./artist.service");
const artist_create_dto_1 = require("./artistDto/artist-create.dto");
const artist_update_dto_1 = require("./artistDto/artist-update.dto");
const swagger_1 = require("@nestjs/swagger");
let ArtistController = class ArtistController {
    constructor(artistService) {
        this.artistService = artistService;
    }
    getArtists() {
        return this.artistService.getArtists();
    }
    createArtist(body) {
        return this.artistService.createArist(body);
    }
    updateArtist(id, body) {
        return this.artistService.updateArtist(id, body);
    }
    deleteArtist(id) {
        return this.artistService.deleteArtist(id);
    }
};
exports.ArtistController = ArtistController;
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve the artists from the database' }),
    (0, swagger_1.ApiOkResponse)({ description: 'All artists retrieved' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "getArtists", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Create an artist' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Artist created succesfully!' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [artist_create_dto_1.ArtistCreateDTO]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "createArtist", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an artist based on his ID' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Artist updated succesfully!',
        status: 200,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, artist_update_dto_1.ArtistUpdateDTO]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "updateArtist", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an artist based on his ID' }),
    (0, swagger_1.ApiResponse)({ description: 'Artist deleted succesfully!', status: 204 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArtistController.prototype, "deleteArtist", null);
exports.ArtistController = ArtistController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidUnknownValues: true,
        transform: true,
    })),
    (0, swagger_1.ApiTags)('Artists'),
    (0, common_1.Controller)('artist'),
    __metadata("design:paramtypes", [artist_service_1.ArtistService])
], ArtistController);
//# sourceMappingURL=artist.controller.js.map