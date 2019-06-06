/*******************************************************************************
 *
 *     Copyright ${year} Adobe. All rights reserved.
 *     This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License. You may obtain a copy
 *     of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software distributed under
 *     the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *     OF ANY KIND, either express or implied. See the License for the specific language
 *     governing permissions and limitations under the License.
 *
 ******************************************************************************/
package com.adobe.cq.commerce.core.components.internal.models.v1.searchresults;

import javax.annotation.Nonnull;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

import com.adobe.cq.commerce.core.components.models.searchresults.SearchResultsExporter;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

/**
 * Don't forget the comment
 */
@Model(adaptables = SlingHttpServletRequest.class,
        adapters = { SearchResultsExporter.class, ComponentExporter.class },
        resourceType = SearchResultsExporterImpl.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class SearchResultsExporterImpl implements SearchResultsExporter {
    static final String RESOURCE_TYPE = "venia/components/commerce/searchresults/v1/searchresults";

    @Nonnull
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
