import { mapProjectFromApiToVm } from "./project.mapper";
import { createEmptyProject } from "./project.vm";
import { mockProject } from "./api/project.mock-data";

describe('Project mapper spec tests', () => {
    describe('empty project', () => {
        it('should return a empty project because project is undefined', () => {
            const project = undefined;
            const result = mapProjectFromApiToVm(project);
            expect(result).toEqual(createEmptyProject());
        }),
        it('should return a empty project because project is null', () => {
            const project = null;
            const result = mapProjectFromApiToVm(project);
            expect(result).toEqual(createEmptyProject());
        }),
        it('should return a project', () => {
            const project = mockProject;
            const result = mapProjectFromApiToVm(project);
            expect(result).toEqual(mockProject);
        })
    })
})