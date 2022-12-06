/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V2HPAScalingPolicy } from './v2HPAScalingPolicy';

/**
* HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
*/
export class V2HPAScalingRules {
    /**
    * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
    */
    'policies'?: Array<V2HPAScalingPolicy>;
    /**
    * selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
    */
    'selectPolicy'?: string;
    /**
    * StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
    */
    'stabilizationWindowSeconds'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "policies",
            "baseName": "policies",
            "type": "Array<V2HPAScalingPolicy>"
        },
        {
            "name": "selectPolicy",
            "baseName": "selectPolicy",
            "type": "string"
        },
        {
            "name": "stabilizationWindowSeconds",
            "baseName": "stabilizationWindowSeconds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V2HPAScalingRules.attributeTypeMap;
    }
}

